#!/bin/bash
set -e
cd `dirname ${0}`/..

VERSION=${1:-patch}

if [[ ! "${VERSION}" =~ ^(patch|minor|major)$ ]]; then
  echo "Usage : ${0} [patch|minor|major]"
  exit 255
fi

npm version $VERSION
git push && git push --tag
npm publish
ssh 3960.org "cd 3960.org/webcomponent-hsi && git pull && exit"
