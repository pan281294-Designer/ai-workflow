#!/bin/bash
# Sets up the environment to use the localized Node v20 binary and starts the Next.js dev server
export PATH="$PWD/build/node20/bin:$PATH"

echo "Using Node version: $(node -v)"
echo "Starting Next.js development server..."
npm run dev
