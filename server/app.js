const express = require('express');
const path = require('path');
const expressLayouts = require('express-ejs-layouts');
const yaml = require('js-yaml');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// 读取导航配置
try {
    const navData = yaml.load(fs.readFileSync(path.join(__dirname, '../_data/navigation.yml'), 'utf8'));
    
    // 确保在每个路由渲染之前都能访问到导航数据
    app.use((req, res, next) => {
        res.locals.navigation = navData.header_nav;
        next();
    });
} catch (e) {
    console.error('Error loading navigation.yml:', e);
    // 提供默认导航，以防文件读取失败
    app.use((req, res, next) => {
        res.locals.navigation = [
            { title: 'Home', link: '/' },
            // { title: 'Portfolio', link: '/portfolio' },
            // { title: 'Blog', link: '/blog' },
            { title: 'About', link: '/about' }
        ];
        next();
    });
}

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