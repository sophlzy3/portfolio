const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

router.get('/', (req, res) => {
  const bioPath = path.join(__dirname, '../../content/about/bio.md');
  
  try {
    const bioContent = fs.readFileSync(bioPath, 'utf8');
    const bioHtml = md.render(bioContent);
    
    res.render('about', {
      title: 'About Me',
      description: 'Learn more about me and my background',
      bio: bioHtml
    });
  } catch (err) {
    console.error('Error reading bio:', err);
    res.render('about', {
      title: 'About Me',
      description: 'Learn more about me and my background',
      bio: '<p>Biography coming soon...</p>'
    });
  }
});

module.exports = router;