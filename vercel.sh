#!/usr/bin/env bash
# Vercel build pipeline — runs after `npm ci` (see vercel.json installCommand).
set -euo pipefail

echo "▶ Lint"
npm run lint

echo "▶ Unit tests"
npm run test:ci

echo "▶ Production build"
export NODE_ENV=production
npm run build
