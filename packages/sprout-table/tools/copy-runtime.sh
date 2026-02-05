#!/bin/bash

# Navigate to the root directory of the repo owning this script so that cwd always is from the root
cd "$(dirname "$0")/.." || exit

# Clean previous dist folder
rm -rf dist
mkdir dist

# Extract the list of modules from component.yaml using yq
modules=$(yq '.publishedPackages.qmfe.modules[]' component.yaml)

# Copy each module to the dist folder
for module in $modules; do
  mkdir -p "dist/$module"
  cp -r "packages/$module"/dist/* "dist/$module"
done
