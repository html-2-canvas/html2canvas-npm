================================================================================
                    HTML2CANVAS WEBSITE - README
================================================================================

ABOUT THIS PROJECT
------------------
This is a professional, modern, responsive multi-page website built with 
HTML, CSS, and JavaScript. The website is designed to showcase HTML2Canvas, 
a popular JavaScript screenshot library, with a clean and elegant design.

FILE STRUCTURE
--------------
├── index.html          (Home page with hero section and features)
├── about.html          (About page with mission and vision)
├── contact.html        (Contact page with Google Form button)
├── download.html       (Download page with installation guide)
├── style.css           (All styling and responsive design)
├── script.js           (Mobile navigation and interactivity)
└── README.txt          (This file)

COLOR PALETTE
-------------
Primary Light:   #FFEEEA (Light peachy background)
Primary White:   #FFFFFF (Clean white)
Accent Coral:    #FF7757 (Vibrant coral for CTAs and highlights)
Text Dark:       #404757 (Dark gray for text)
Text Light:      #6B7280 (Light gray for secondary text)

HOW TO RUN LOCALLY
------------------
1. Download/extract all files to a folder
2. Open 'index.html' in your web browser
3. Navigate between pages using the navigation menu
4. The website is fully functional without any server setup

Alternatively, you can use a local server:
- Using Python 3: python -m http.server 8000
- Using Node.js: npx http-server
- Using VS Code: Install "Live Server" extension and click "Go Live"

Then open: http://localhost:8000 in your browser

CUSTOMIZATION GUIDE
-------------------

1. CHANGING COLORS
   Location: style.css (lines 2-8)
   Edit the CSS variables under ':root':
   --primary-light: #FFEEEA;     (Change to your light background color)
   --primary-white: #FFFFFF;     (Keep white or change to off-white)
   --accent-coral: #FF7757;      (Change to your brand color)
   --text-dark: #404757;         (Change to your text color)
   --text-light: #6B7280;        (Change to your secondary text color)

2. REPLACING GOOGLE FORM LINK
   Location: contact.html (line 68)
   Find: https://docs.google.com/forms/d/e/1FAIpQLSelru1QfiYeo1ScnG7zA_OsaqxsBXICobniMKvsCVNxsOTtYw/viewform?usp=header
   Replace with your Google Form link

3. CHANGING GITHUB LINK
   Location: All HTML files in navigation (search for "github.com")
   Find: https://github.com/html-2-canvas/html2canvas
   Replace with your GitHub repository URL

4. CHANGING DOWNLOAD LINK
   Location: download.html (line 66)
   Find: https://html2canvas.net/download/
   Replace with your download URL or file path

5. REPLACING OFFICIAL SITE LINK
   Location: index.html (line 66) and footer in all pages
   Find: https://html2canvas.net/
   Replace with your official website URL

6. CHANGING KEYWORDS AND LINKS
   Location: index.html (lines 79, 87, 95)
   The three focus keywords with links:
   - "html2canvas npm" → https://html2canvas.net/
   - "what is html2canvas" → https://html2canvas.net/is-html2canvas-open-source/
   - "javascript resize image base64" → https://html2canvas.net/how-to-convert-canvas-to-base64-image/
   
   Replace the keywords and URLs as needed for your SEO strategy

7. CHANGING TEXT CONTENT
   - Site Name: Search for "HTML2Canvas" in all files and replace
   - Hero Title: Edit index.html line 59
   - Hero Subtitle: Edit index.html line 60
   - Feature Cards: Edit the feature-card sections in index.html
   - About Content: Edit the about-section elements in about.html
   - Footer Text: Edit footer sections in all HTML files

8. CHANGING FONTS
   Location: style.css (line 18)
   Current: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto
   
   To use Google Fonts:
   a. Visit https://fonts.google.com/
   b. Select your fonts (e.g., Poppins, Montserrat)
   c. Copy the <link> tag and paste in <head> of all HTML files
   d. Update font-family in style.css line 18

9. CHANGING LOGO
   Location: All HTML files (search for class="logo")
   Current: Text-based logo "HTML2Canvas"
   
   To use an image logo:
   Replace: <a href="index.html" class="logo">HTML2Canvas</a>
   With: <a href="index.html" class="logo"><img src="logo.png" alt="Logo"></a>
   
   Add CSS in style.css:
   .logo img {
       height: 40px;
       width: auto;
   }

10. MODIFYING FOOTER COPYRIGHT
    Location: All HTML files (search for "footer-bottom")
    Edit the text: "Designed & Developed by Professional Web Solutions"
    Replace with your name or company

RESPONSIVE BREAKPOINTS
----------------------
Desktop:   > 768px (Full navigation, grid layouts)
Tablet:    768px (Adjusted grids, hamburger menu)
Mobile:    < 480px (Single column, optimized for small screens)

FEATURES INCLUDED
-----------------
✓ Responsive mobile navigation with hamburger menu
✓ Smooth scroll animations
✓ Hover effects on cards and buttons
✓ Back to top button
✓ Scroll progress indicator
✓ Copy code blocks on click
✓ SEO-friendly semantic HTML
✓ Cross-browser compatible
✓ Fast loading and optimized
✓ Modern gradient backgrounds
✓ Professional typography

BROWSER SUPPORT
---------------
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

PERFORMANCE TIPS
----------------
1. Optimize images: Use WebP format and compress before uploading
2. Minify CSS and JavaScript for production
3. Enable gzip compression on your web server
4. Use a CDN for hosting static assets
5. Add meta tags for social sharing (Open Graph, Twitter Cards)

SEO OPTIMIZATION
----------------
The website includes:
- Semantic HTML5 elements (header, nav, main, section, footer)
- Meta descriptions on all pages
- Proper heading hierarchy (H1, H2, H3)
- Alt text for images (add your own images with alt text)
- Internal linking structure
- Focus keywords naturally placed in content
- Mobile-friendly responsive design

To improve SEO further:
1. Add more unique content to each page
2. Include schema.org structured data
3. Create an XML sitemap
4. Add robots.txt file
5. Optimize page load speed
6. Add Open Graph and Twitter Card meta tags

TROUBLESHOOTING
---------------
Issue: Mobile menu not working
Solution: Check that script.js is properly linked in all HTML files

Issue: Styles not applying
Solution: Verify style.css path is correct and file exists

Issue: Links not working
Solution: Check that all href attributes have correct file paths

Issue: Google Form button not opening
Solution: Verify the Google Form URL is correct and accessible

Issue: Colors look different
Solution: Clear browser cache and hard refresh (Ctrl+F5)

DEPLOYMENT
----------
To deploy this website:

1. GitHub Pages:
   - Create a repository on GitHub
   - Upload all files
   - Go to Settings → Pages
   - Select main branch and root folder
   - Your site will be live at username.github.io/repo-name

2. Netlify:
   - Sign up at netlify.com
   - Drag and drop your project folder
   - Site will be live instantly with a custom URL

3. Vercel:
   - Sign up at vercel.com
   - Import your GitHub repository or upload files
   - Deploy with one click

4. Traditional Hosting:
   - Upload all files to your web hosting via FTP
   - Ensure file permissions are correct
   - Access via your domain name

ADDITIONAL RESOURCES
--------------------
- HTML2Canvas Official: https://html2canvas.net/
- GitHub Repository: https://github.com/html-2-canvas/html2canvas
- MDN Web Docs: https://developer.mozilla.org/
- CSS Tricks: https://css-tricks.com/
- Web.dev: https://web.dev/

SUPPORT & UPDATES
-----------------
For questions or support, use the contact form on the website.
To report bugs or suggest features, open an issue on GitHub.

LICENSE
-------
This website template is free to use and modify for personal or commercial 
projects. Attribution is appreciated but not required.

================================================================================
                         THANK YOU FOR USING THIS TEMPLATE!
                    Happy coding and best wishes for your project!
================================================================================
