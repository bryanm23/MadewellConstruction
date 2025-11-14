# Favicon Setup Instructions

## Easiest Method (Recommended) - Using Online Tool

1. Go to **https://realfavicongenerator.net/**
2. Click "Select your Favicon image" and upload `public/favicon.svg`
3. Configure settings:
   - iOS: Enable "Apple touch icon" (180x180)
   - Android: Enable "Android Chrome" icons
   - Windows: Enable "Windows Metro" tiles
4. Click "Generate your Favicons and HTML code"
5. Download the favicon package
6. Extract and copy these files to the `public/` folder:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png` (or `apple-touch-icon-180x180.png` - rename to `apple-touch-icon.png`)
   - `favicon-512.png` (if not included, use the largest icon and resize to 512x512)

## Alternative: Using generate-favicons.html

1. Open `generate-favicons.html` in your browser
2. Click each button to generate and download the PNG files
3. Move all downloaded files to the `public/` folder

## Files Created

- ✅ `public/favicon.svg` - SVG favicon (already created)
- ✅ `index.html` - Updated with proper favicon links
- ✅ `public/site.webmanifest` - Web manifest for PWA support
- ⏳ `public/favicon-512.png` - Needs to be generated
- ⏳ `public/favicon-32x32.png` - Needs to be generated
- ⏳ `public/favicon-16x16.png` - Needs to be generated
- ⏳ `public/apple-touch-icon.png` - Needs to be generated

## Verification

After generating the PNG files, verify they're in the `public/` folder and accessible at:
- https://madewellconstruction.org/favicon-512.png
- https://madewellconstruction.org/favicon-32x32.png
- https://madewellconstruction.org/favicon-16x16.png
- https://madewellconstruction.org/apple-touch-icon.png

## Testing

1. Clear your browser cache
2. Visit https://madewellconstruction.org
3. Check the browser tab - you should see the favicon
4. Test on mobile devices to verify apple-touch-icon works

