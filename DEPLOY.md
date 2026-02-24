# BLEUKEI Website - Cloudflare Pages Deployment Guide

## Build Status
✅ Build successful - Static export generated in `/dist`

## Deploy to Cloudflare Pages

### Option 1: Drag & Drop (Quickest)
1. Go to https://dash.cloudflare.com
2. Navigate to Pages > Create a project
3. Select "Upload assets"
4. Drag the entire `dist` folder
5. Project name: `bleukei`
6. Deploy

### Option 2: Git Integration (Recommended for CI/CD)
1. Push this repo to GitHub
2. In Cloudflare Pages, connect your GitHub repo
3. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `bleukei-website`

### Option 3: Wrangler CLI
```bash
# Install wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
cd bleukei-website/dist
wrangler pages deploy . --project-name=bleukei
```

## Custom Domain Setup
1. In Cloudflare Pages dashboard, go to Custom domains
2. Add `bleukei.com`
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic with Cloudflare)

## Post-Deploy Checklist
- [ ] Verify all sections render correctly
- [ ] Test floating dock navigation
- [ ] Test contact form submission
- [ ] Test newsletter signup
- [ ] Verify mobile responsiveness
- [ ] Check animated counters on scroll
- [ ] Test all hover effects

## Design Features Implemented
✅ Pure black background (#000000)
✅ BLEUKEI teal + coral accent colors
✅ Glassmorphism cards throughout
✅ Floating bottom dock navigation
✅ Animated number counters on scroll
✅ Responsive design (mobile-first)
✅ Working contact form
✅ Newsletter signup section
✅ All content migrated from existing bleukei.com

## Sections
1. Hero - "Accelerating ambitious brands" with animated metrics
2. Projects - Glass cards showing recent work
3. Services - Brand Strategy, Design, Growth, Operations
4. Process - 4-step methodology
5. Trust - Client logos and testimonials
6. Insights - Newsletter signup
7. Contact - Full contact form
8. Footer - Social links

## Performance
- Static export (no server required)
- Optimized images
- Minimal JavaScript
- CSS animations via Framer Motion
