# Deploying Your Personal Website

This guide will help you deploy your website to make it accessible to everyone online.

## 🚀 Recommended Options (Free)

### Option 1: Vercel (Easiest - Recommended)

**Steps:**
1. **Create a GitHub account** (if you don't have one) and push your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/Donerne/personal-website.git
   git push -u origin main
   ```

2. **Go to [vercel.com](https://vercel.com)** and sign up with GitHub

3. **Import your repository:**
   - Click "New Project"
   - Select your `personal-website` repository
   - Vercel will auto-detect Vite
   - Click "Deploy"

4. **Your site will be live** at `your-username-xyz.vercel.app`

**Benefits:**
- ✅ Free tier (perfect for personal sites)
- ✅ Automatic deployments on every git push
- ✅ Free custom domain support
- ✅ SSL certificate (HTTPS) included
- ✅ Super fast CDN

---

### Option 2: Netlify

**Steps:**
1. **Push your code to GitHub** (same as step 1 above)

2. **Go to [netlify.com](https://netlify.com)** and sign up

3. **Import from Git:**
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy"

4. **Your site will be live** at `random-name-123.netlify.app`

---

### Option 3: GitHub Pages (Free)

**Steps:**
1. **Install GitHub Pages plugin:**
   ```bash
   npm install --save-dev vite-plugin-gh-pages
   ```

2. **Update `vite.config.js`** (see below)

3. **Push to GitHub** and enable GitHub Pages in repository settings

---

## 📝 Quick Setup Instructions

### For Vercel/Netlify:

**1. Initialize Git (if not already done):**
```bash
git init
git add .
git commit -m "Ready for deployment"
```

**2. Create GitHub Repository:**
- Go to github.com
- Create a new repository (e.g., "personal-website")
- Copy the repository URL

**3. Connect and Push:**
```bash
git remote add origin YOUR_GITHUB_REPO_URL
git branch -M main
git push -u origin main
```

**4. Deploy:**
- Follow Vercel or Netlify steps above

---

## ⚙️ Configuration Updates Needed

Your project is already configured for deployment! The `package.json` has the build script.

### If using GitHub Pages:

Update `vite.config.js`:
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ghPages from 'vite-plugin-gh-pages'

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/personal-website/' // Replace with your repo name
})
```

---

## 🌐 Custom Domain (Optional)

After deployment, you can add a custom domain:
- **Vercel:** Settings → Domains → Add your domain
- **Netlify:** Site settings → Domain management

Both provide free SSL certificates automatically!

---

## 📦 Build Locally First (Test)

Before deploying, test the production build:
```bash
npm run build
npm run preview
```

This builds and previews your site locally before going live.

---

## ✅ Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Tested `npm run build` locally
- [ ] Chosen deployment platform (Vercel recommended)
- [ ] Connected GitHub repository
- [ ] Site is live and accessible
- [ ] (Optional) Added custom domain

---

## 🆘 Troubleshooting

**Issue: Routes not working (404 errors)**
- Make sure your hosting platform supports SPA routing
- Vercel/Netlify handle this automatically
- For GitHub Pages, you may need a `_redirects` file

**Issue: Images not loading**
- Make sure image paths are relative or use imports
- Check that all assets are in the `public` folder or properly imported

**Need help?** The deployment platforms have excellent documentation and support!
