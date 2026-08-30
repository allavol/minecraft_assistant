# 🌐 Web & Deployment Best Practices

## 1. Favicon counter-caching & Reliability
- **Always use Base64 Data URIs for Favicons** when deploying to static hosting like GitHub Pages:
  `<link rel="icon" type="image/png" href="data:image/png;base64,...">`
- **Why**: Bypasses browser-level (Chrome/Edge) persistent icon caches and eliminates 404 path-resolution errors in subfolder repositories.

## 2. Deployment Synchronization
- When working on a live GitHub Pages project, always verify whether changes need to be staged, committed, and pushed (`git push origin main`) for the user to see them on the live URL.
- Always inform the user about the ~30-60 seconds build delay on GitHub Pages after pushing.
