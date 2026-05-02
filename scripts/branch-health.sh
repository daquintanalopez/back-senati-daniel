#!/usr/bin/env bash
# Branch health: local branches vs origin (or REMOTE).
# Usage:
#   npm run branches
#   bash scripts/branch-health.sh          # fetch + report
#   NO_FETCH=1 bash scripts/branch-health.sh
#   bash scripts/branch-health.sh upstream  # other remote name

set -euo pipefail

REMOTE="${1:-${REMOTE:-origin}}"

if [[ "${NO_FETCH:-}" != "1" ]]; then
  echo "→ git fetch $REMOTE --prune"
  git fetch "$REMOTE" --prune
  echo
fi

echo "========== Branch health ($REMOTE) =========="
echo "Current: $(git branch --show-current)"
echo

printf "%-36s %-38s %s\n" "LOCAL" "TRACKS" "STATUS"
printf "%s\n" "--------------------------------------------------------------------------------"

git for-each-ref refs/heads/ --sort=refname \
  --format='%(refname:short)|%(upstream:short)|%(upstream:track)' |
while IFS='|' read -r local upstream track; do
  [[ -z "$upstream" ]] && upstream="—" && track="(set: git branch -u $REMOTE/$local)"
  [[ -z "$track" ]] && track="in sync"
  printf "%-36s %-38s %s\n" "$local" "$upstream" "$track"
done

echo
echo "=== Ahead / behind (commits) vs remote tips ==="
echo "(first number = only on local, second = only on remote)"
echo

for tip in develop main; do
  if git show-ref --verify --quiet "refs/heads/$tip" 2>/dev/null &&
    git show-ref --verify --quiet "refs/remotes/$REMOTE/$tip" 2>/dev/null; then
    read -r left right <<<"$(git rev-list --left-right --count "$tip...$REMOTE/$tip")"
    printf "  %-12s vs %-20s  local %+3s  remote %+3s\n" "$tip" "$REMOTE/$tip" "$left" "$right"
  fi
done

echo
echo "=== Feature branches (not develop/main) — merge-base with $REMOTE/develop ==="
if git show-ref --verify --quiet "refs/remotes/$REMOTE/develop" 2>/dev/null; then
  git for-each-ref refs/heads/ --format='%(refname:short)' |
    grep -vxE 'develop|main' |
    while read -r b; do
      behind="$(git rev-list --count "$b..$REMOTE/develop" 2>/dev/null || echo "?")"
      printf "  %-30s commits on %s/develop not in %s: %s\n" "$b" "$REMOTE" "$b" "$behind"
    done || true
else
  echo "  (no $REMOTE/develop — skip)"
fi

echo
echo "Tip: set upstream for current branch:  git push -u $REMOTE \$(git branch --show-current)"
echo "Tip: update from develop before PR:    git fetch $REMOTE && git merge $REMOTE/develop"
