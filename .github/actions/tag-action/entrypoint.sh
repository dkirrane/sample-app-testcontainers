#!/bin/sh -l

sh -c "echo Tagging latest commit with version: $INPUT_VERSION"

echo ""
git --version
git status

echo ""
repoUrl=$( git config --get remote.origin.url )
repoName=$( basename -s .git ${repoUrl} )
currentBranch=$( git branch --show-current )

echo ""
echo "Repo URI: ${repoUrl}"
echo "Repo Name: ${repoName}"
echo "Current branch: ${currentBranch}"
echo ""

git config --global user.email "ghactions@avaya.com"
git config --global user.name "GH Action"

git tag -a -m "release: ${INPUT_VERSION}" ${INPUT_VERSION}

echo ""
echo "Pushing new tag"
git push origin ${INPUT_VERSION}
echo "Done"
echo ""