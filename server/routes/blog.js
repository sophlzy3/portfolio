const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const MarkdownIt = require('markdown-it');
const md = new MarkdownIt();

// Get blog posts
const getBlogPosts = () => {
  const postsDir = path.join(__dirname, '../../content/blog/posts');
  try {
    const files = fs.readdirSync(postsDir);
    
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(postsDir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Extract metadata from frontmatter (assumes format: --- title: X date: Y --- content...)
        const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
        const metadata = {};
        
        if (frontMatterMatch) {
          const [, frontMatter, markdownContent] = frontMatterMatch;
          
          // Parse frontmatter
          frontMatter.split('\n').forEach(line => {
            const [key, value] = line.split(': ');
            if (key && value) {
              metadata[key.trim()] = value.trim();
            }
          });
          
          return {
            id: file.replace('.md', ''),
            title: metadata.title || 'Untitled',
            date: metadata.date || 'Unknown date',
            excerpt: markdownContent.substring(0, 150) + '...',
            content: md.render(markdownContent),
            rawContent: markdownContent
          };
        }
        
        // Fallback if no frontmatter
        return {
          id: file.replace('.md', ''),
          title: file.replace('.md', '').replace(/-/g, ' '),
          date: 'Unknown date',
          excerpt: content.substring(0, 150) + '...',
          content: md.render(content),
          rawContent: content
        };
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  } catch (err) {
    console.error('Error reading blog posts:', err);
    return [];
  }
};

router.get('/', (req, res) => {
  const posts = getBlogPosts();
  
  res.render('blog/index', {
    title: 'Blog',
    description: 'My thoughts and writings',
    posts
  });
});

router.get('/:postId', (req, res) => {
  const posts = getBlogPosts();
  const post = posts.find(p => p.id === req.params.postId);
  
  if (!post) {
    return res.status(404).render('404', { title: 'Post Not Found' });
  }
  
  res.render('blog/post', {
    title: post.title,
    description: post.excerpt,
    post
  });
});

module.exports = router;