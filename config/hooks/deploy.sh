#!/usr/bin/env bash

cp -r backstop_data/ src/report
git add src/
git commit -m "deploy static content"
git subtree push --prefix src origin gh-pages
./node_modules/.bin/rimraf src/report
git add src/
git commit -m "removed report after deploy"
