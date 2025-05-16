# GitHub Repository and GitHub Pages Setup Instructions

## Step 1: Create a new repository on GitHub
1. Go to https://github.com/new
2. Name your repository `MadewellConstruction`
3. You can add an optional description
4. Choose to make it Public or Private
5. Do NOT initialize it with a README, .gitignore, or license
6. Click "Create repository"

## Step 2: Connect your local repository
After creating the repository, you'll see a page with setup instructions. Run the following command in your terminal:

```bash
git remote add origin https://github.com/YOUR-USERNAME/MadewellConstruction.git
git branch -M main
git push -u origin main
```
(Replace "YOUR-USERNAME" with your actual GitHub username)

## Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click "Settings" tab
3. Click "Pages" in the left sidebar
4. Under "Build and deployment" section:
   - Set "Source" to "Deploy from a branch"
   - Set "Branch" to "gh-pages" (this will be created by the GitHub Actions workflow)
   - Click "Save"

## Step 4: Wait for the deployment
1. Go to the "Actions" tab in your repository
2. You should see a workflow running after your first push
3. Once it completes successfully, your site will be available at:
   https://YOUR-USERNAME.github.io/MadewellConstruction/

## Making future changes
Any changes you push to the main branch will automatically be deployed to GitHub Pages through the GitHub Actions workflow.

```bash
# After making changes:
git add .
git commit -m "Your descriptive commit message"
git push
``` 