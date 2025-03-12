const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

// Get portfolio metadata
const getPortfolioData = () => {
  const metadataPath = path.join(__dirname, '../../content/portfolio/metadata.json');
  try {
    const data = fs.readFileSync(metadataPath, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading portfolio metadata:', err);
    return { projects: [] };
  }
};

router.get('/', (req, res) => {
  const portfolioData = getPortfolioData();
  
  res.render('portfolio/index', { 
    title: 'Portfolio',
    description: 'My work and projects',
    projects: portfolioData.projects
  });
});

router.get('/:projectId', (req, res) => {
  const portfolioData = getPortfolioData();
  const project = portfolioData.projects.find(p => p.id === req.params.projectId);
  
  if (!project) {
    return res.status(404).render('404', { title: 'Project Not Found' });
  }
  
  res.render('portfolio/project', {
    title: project.title,
    description: project.description,
    project
  });
});

module.exports = router;