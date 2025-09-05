# NEF File Handling Guide

## Current Situation

Your portfolio currently has NEF files (Nikon Raw format) that cannot be displayed directly in web browsers. The photography page will show a placeholder for these files.

## Quick Solutions

### Option 1: Use macOS Preview (Easiest)
1. Open NEF files in Preview app
2. File > Export
3. Choose JPEG format, quality 85%
4. Save to `/public/photos/converted/` folder

### Option 2: Use ImageMagick (Command Line)
```bash
# Install ImageMagick
brew install imagemagick

# Convert a single file
magick DSC_7689.NEF -quality 85 -resize 1920x1080> converted/DSC_7689.jpg

# Convert all NEF files
for file in *.NEF; do
  magick "$file" -quality 85 -resize 1920x1080> "converted/${file%.NEF}.jpg"
done
```

### Option 3: Use Photo Editing Software
- Adobe Lightroom
- Capture One
- Darktable (free)
- RawTherapee (free)

## Update Your Portfolio

After converting files, update your photography data:

```typescript
{
  id: 2,
  title: "Nature's Beauty",
  category: "Nature",
  imageUrl: "/photos/converted/DSC_7689.jpg", // Use converted file
  description: "Exploring the natural world and its breathtaking landscapes."
}
```

## Analyze Your NEF Files

Run this command to see all your NEF files:
```bash
npm run analyze-nef
```

## File Structure
```
public/photos/
├── DSC_7689.NEF          # Original (not web-compatible)
├── converted/
│   └── DSC_7689.jpg      # Converted (web-compatible)
└── 000011880009.jpg      # Already web-compatible
```

## Benefits of Conversion
- ✅ Web browser compatibility
- ✅ Faster loading times
- ✅ Smaller file sizes
- ✅ Better user experience
- ✅ Responsive design support 