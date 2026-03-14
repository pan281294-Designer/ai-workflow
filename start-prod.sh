#!/bin/bash
export PATH="$PWD/build/node20/bin:$PATH"

echo "Using Node version: $(node -v)"
echo "Starting Next.js production server..."
npm run start
