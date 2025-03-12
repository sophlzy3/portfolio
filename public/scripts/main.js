document.addEventListener('DOMContentLoaded', function() {
     // Add a grid background animation effect (subtle)
     const mainElement = document.querySelector('main');
     
     // Navigation highlight for current page
     const currentLocation = window.location.pathname;
     const navLinks = document.querySelectorAll('nav a');
     
     navLinks.forEach(link => {
         const linkPath = link.getAttribute('href');
         if (currentLocation === linkPath || 
             (linkPath !== '/' && currentLocation.startsWith(linkPath))) {
             link.style.color = getComputedStyle(document.documentElement)
                 .getPropertyValue('--primary-color');
         }
     });
 });