#!/usr/bin/env bash
# Vercel build pipeline — runs after `npm ci` (see vercel.json installCommand).
set -euo pipefail

echo "▶ Lint"
npm run lint

echo "▶ Unit tests"
# Vercel sets NODE_ENV=production for the build; tests need development React (e.g. act).
NODE_ENV=test npm run test:ci

echo "▶ Production build"
export NODE_ENV=production
npm run build
