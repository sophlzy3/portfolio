#!/bin/bash

# Create the directory structure
mkdir -p personal-website/{server/{routes,middleware,config},public/{styles,scripts,images,fonts},content/{portfolio/{images/{project1,project2},metadata},blog/{posts,assets/post-images},about/profile-pics},views/{layouts,partials,blog,portfolio}}

# Create server files
touch personal-website/server/app.js
touch personal-website/server/routes/{index.js,blog.js,portfolio.js,about.js}
touch personal-website/server/middleware/errorHandler.js
touch personal-website/server/config/database.js

# Create public files
touch personal-website/public/styles/{main.css,blog.css,portfolio.css}
touch personal-website/public/scripts/{main.js,gallery.js,blog.js}
touch personal-website/public/images/logo.png

# Create content files
touch personal-website/content/portfolio/metadata.json
touch personal-website/content/blog/posts/{2024-03-11-first-post.md,2024-03-12-second-post.md}
touch personal-website/content/about/{bio.md,resume.pdf}

# Create view files
touch personal-website/views/layouts/main.ejs
touch personal-website/views/partials/{header.ejs,footer.ejs,navigation.ejs}
touch personal-website/views/{index.ejs,about.ejs}
touch personal-website/views/blog/{index.ejs,post.ejs}
touch personal-website/views/portfolio/{index.ejs,project.ejs}

# Create root files
touch personal-website/{package.json,.env,.gitignore,README.md}

echo "File structure created successfully!"