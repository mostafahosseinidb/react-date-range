#!/bin/bash

# 🚀 AustroByte Date Picker - Publish Script
# این اسکریپت برای publish کردن پکیج استفاده می‌شه

set -e  # Exit on any error

echo "📦 Starting publish process for austro-byte-datepicker..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're on master branch
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "master" ]; then
    print_error "You must be on master branch to publish. Current branch: $CURRENT_BRANCH"
    exit 1
fi

# Check if there are uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_warning "You have uncommitted changes. Please commit them first."
    git status
    exit 1
fi

# Step 1: Build the project
print_status "Building the project..."
yarn build
print_success "Build completed successfully!"

# Step 2: Test the package
print_status "Testing package contents..."
npm pack --dry-run
print_success "Package test completed!"

# Step 3: Get current version
CURRENT_VERSION=$(node -p "require('./package.json').version")
print_status "Current version: $CURRENT_VERSION"

# Step 4: Ask for version bump type
echo ""
echo "Select version bump type:"
echo "1) patch (1.0.2 -> 1.0.3) - Bug fixes"
echo "2) minor (1.0.2 -> 1.1.0) - New features"
echo "3) major (1.0.2 -> 2.0.0) - Breaking changes"
echo "4) custom - Enter custom version"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        print_status "Bumping patch version..."
        npm version patch --no-git-tag-version
        ;;
    2)
        print_status "Bumping minor version..."
        npm version minor --no-git-tag-version
        ;;
    3)
        print_status "Bumping major version..."
        npm version major --no-git-tag-version
        ;;
    4)
        read -p "Enter custom version (e.g., 1.0.3): " custom_version
        print_status "Setting custom version: $custom_version"
        npm version $custom_version --no-git-tag-version
        ;;
    *)
        print_error "Invalid choice. Exiting..."
        exit 1
        ;;
esac

# Get new version
NEW_VERSION=$(node -p "require('./package.json').version")
print_success "Version bumped to: $NEW_VERSION"

# Step 5: Commit version bump
print_status "Committing version bump..."
git add package.json
git commit -m "Bump version to $NEW_VERSION"

# Step 6: Create git tag
print_status "Creating git tag..."
git tag -a "v$NEW_VERSION" -m "Release version $NEW_VERSION"

# Step 7: Publish to npm
print_status "Publishing to npm..."
npm publish

# Step 8: Push to git
print_status "Pushing to git..."
git push origin1 master
git push origin1 --tags

# Step 9: Update GitHub Pages
print_status "Updating GitHub Pages..."
git checkout gh-pages
git checkout master -- index.html demo-interactive.html
git add .
git commit -m "Update demo files for version $NEW_VERSION"
git push origin1 gh-pages
git checkout master

print_success "🎉 Publish completed successfully!"
print_success "Version $NEW_VERSION is now live on npm!"
print_success "Demo page updated at: https://mostafahosseinidb.github.io/ReactDatePicker/"

echo ""
echo "📋 Next steps:"
echo "1. Check the package on npm: https://www.npmjs.com/package/austro-byte-datepicker"
echo "2. Test the installation: npm install austro-byte-datepicker@$NEW_VERSION"
echo "3. Update CHANGELOG.md if needed"
echo "4. Create a GitHub release if needed"
echo "" 