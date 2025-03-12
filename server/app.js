const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files
app.use(express.static(path.join(__dirname, '../public')));

// Routes
const indexRouter = require('./routes/index');
const portfolioRouter = require('./routes/portfolio');
const blogRouter = require('./routes/blog');
const aboutRouter = require('./routes/about');

app.use('/', indexRouter);
app.use('/portfolio', portfolioRouter);
app.use('/blog', blogRouter);
app.use('/about', aboutRouter);

// 404 handler
app.use((req, res) => {
    res.status(404).render('404', { title: 'Page Not Found' });
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error', { title: 'Server Error', error: err });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});