#!/usr/bin/env bash
set -euo pipefail

BUMP="${1:-patch}"
MSG="${2:-chore: release}"

if [ ! -f package.json ]; then
  echo "❌ Run this from the repo root (package.json not found)."
  exit 1
fi

# 1) build dist (JS + d.ts)
npm run build

# 2) stage ALL changes incl dist
git add -A

# 3) commit build changes if any (e.g. dist updated)
if ! git diff --cached --quiet; then
  git commit -m "$MSG"
fi

# 4) bump version + tag (creates another commit + tag)
npm version "$BUMP"

# 5) push commits + tags
git push
git push --tags

echo "✅ Released v$(node -p "require('./package.json').version")"
