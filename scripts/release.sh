#!/usr/bin/env bash
set -euo pipefail

# usage:
#   ./scripts/release.sh            -> patch
#   ./scripts/release.sh patch      -> patch
#   ./scripts/release.sh minor      -> minor
#   ./scripts/release.sh major      -> major
#   ./scripts/release.sh patch "feat: add input"  -> custom message for the "changes" commit

BUMP="${1:-patch}"
MSG="${2:-chore: changes}"

# ensure we're in repo root (where package.json is)
if [ ! -f package.json ]; then
  echo "❌ Run this from the repo root (package.json not found)."
  exit 1
fi

# ensure dist is not tracked / ignored (so npm version can run clean)
if [ -d dist ]; then
  rm -rf dist
fi

if [ ! -f .gitignore ]; then
  touch .gitignore
fi

# add dist/ to .gitignore if missing
if ! grep -qx "dist/" .gitignore; then
  echo "dist/" >> .gitignore
fi

# If dist was ever tracked, untrack it (safe even if not tracked)
git rm -r --cached dist >/dev/null 2>&1 || true

# stage everything (including lockfile, scripts, etc.)
git add -A

# commit changes if there are any
if ! git diff --cached --quiet; then
  git commit -m "$MSG"
fi

# at this point repo must be clean for npm version
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "❌ Repo still not clean after commit. Check 'git status'."
  exit 1
fi

# bump version + create tag + commit
npm version "$BUMP"

# push commit + tags
git push
git push --tags

# optional sanity build (doesn't get committed; dist is ignored)
npm run build

echo "✅ Released v$(node -p "require('./package.json').version")"
