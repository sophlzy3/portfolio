#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const photosDir = path.join(__dirname, '../public/photos');
const outputDir = path.join(__dirname, '../public/photos/converted');

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

function listNefFiles() {
  try {
    const files = fs.readdirSync(photosDir);
    const nefFiles = files.filter(file => file.toLowerCase().endsWith('.nef'));
    
    console.log('NEF Files found:');
    console.log('================');
    
    if (nefFiles.length === 0) {
      console.log('No NEF files found in /public/photos/');
      return;
    }
    
    nefFiles.forEach((file, index) => {
      const filePath = path.join(photosDir, file);
      const stats = fs.statSync(filePath);
      const sizeMB = (stats.size / (1024 * 1024)).toFixed(1);
      console.log(`${index + 1}. ${file} (${sizeMB} MB)`);
    });
    
    console.log('\nTo convert these files, you have several options:');
    console.log('\n1. Use ImageMagick (recommended):');
    console.log('   brew install imagemagick  # macOS');
    console.log('   sudo apt-get install imagemagick  # Ubuntu/Debian');
    console.log('   Then run: magick input.NEF -quality 85 -resize 1920x1080> output.jpg');
    
    console.log('\n2. Use Adobe Lightroom or similar photo editing software');
    console.log('   - Import NEF files');
    console.log('   - Export as JPEG with web-optimized settings');
    
    console.log('\n3. Use online converters (for a few files)');
    console.log('   - Upload to online NEF to JPEG converters');
    console.log('   - Download converted files');
    
    console.log('\n4. Use macOS Preview (if on Mac):');
    console.log('   - Open NEF files in Preview');
    console.log('   - File > Export > Choose JPEG format');
    
    console.log('\nAfter conversion:');
    console.log('- Place converted JPEG files in /public/photos/converted/');
    console.log('- Update your photography data to use the converted files');
    console.log('- Test your portfolio to ensure images display correctly');
    
  } catch (error) {
    console.error('Error reading photos directory:', error.message);
  }
}

// Main execution
console.log('NEF File Analysis');
console.log('=================\n');

listNefFiles(); 