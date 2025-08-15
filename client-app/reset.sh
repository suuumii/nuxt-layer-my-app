#!/bin/bash

cd ../client-base/
npm pack

cd ../client-app
cp ../client-base/client-base-1.0.0.tgz ./
rm -rf node_modules
rm -rf .nuxt
rm -rf pnpm-lock.yaml

pnpm i
