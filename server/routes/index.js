const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home',
    description: 'Welcome to my personal website' 
  });
});

module.exports = router;