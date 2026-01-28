# QuoteChop LLC Website

## Overview
Professional institutional electronics and IT infrastructure website for QuoteChop LLC, serving universities, research institutions, and government-linked educational programs.

## Technology Stack
- **Static Site**: HTML5, CSS3, JavaScript (ES6+)
- **No Frameworks**: Pure HTML/CSS/JS for maximum compatibility
- **Responsive**: Mobile-first design with desktop optimization
- **SEO Optimized**: Structured data, meta tags, sitemap
- **Accessible**: WCAG 2.1 AA compliant with ARIA labels

## Deployment Instructions

### GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Select source branch (usually `main` or `gh-pages`)
4. Site will be available at `https://username.github.io/repository-name`

### Static Hosting
1. Upload all files to web server
2. Ensure `index.html` is in root directory
3. Configure domain pointing if using custom domain

### Domain Configuration
For custom domain `www.qchop.com`:
1. Create `CNAME` file in root with content: `www.qchop.com`
2. Configure DNS A records to point to hosting provider
3. Update canonical URLs in HTML files if needed

## File Structure
```
/
├── index.html                 # Homepage
├── assets/
│   ├── css/
│   │   └── styles.css         # Main stylesheet
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   └── images/
│       └── logo.png           # Company logo
├── pages/                     # Additional pages
│   ├── about.html
│   ├── divisions.html
│   ├── products.html
│   ├── csr.html
│   ├── institutions.html
│   ├── documentation.html
│   ├── contact.html
│   ├── privacy.html
│   ├── terms.html
│   └── disclaimer.html
├── sitemap.xml                # SEO sitemap
├── robots.txt                 # Search engine instructions
└── README.md                  # This file
```

## SEO Features
- **Sitemap**: `sitemap.xml` with all pages and priorities
- **Robots**: `robots.txt` allowing search engine indexing
- **Meta Tags**: Unique titles and descriptions for each page
- **Canonical URLs**: Prevent duplicate content issues
- **Structured Headings**: Proper H1 → H2 → H3 hierarchy

## Accessibility Features
- **Skip to Content**: Keyboard navigation shortcut
- **ARIA Labels**: Screen reader compatibility
- **Focus Indicators**: Visible keyboard focus states
- **Semantic HTML**: Proper element usage
- **Color Contrast**: WCAG compliant text contrast

## Performance Optimizations
- **Lazy Loading**: Images load as needed
- **Minimal Dependencies**: No external frameworks
- **Optimized CSS**: Efficient selectors and organization
- **Clean JavaScript**: No unnecessary libraries

## Browser Compatibility
- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile**: iOS Safari, Chrome Mobile
- **Desktop**: Full compatibility with modern desktop browsers

## Content Guidelines
- **Institutional Focus**: B2B/B2E content only
- **No Consumer Elements**: No retail, pricing, or individual sales
- **Professional Tone**: Formal, institutional language
- **Compliance Oriented**: Documentation and process focus

## Maintenance
- **Content Updates**: Edit HTML files directly
- **Style Changes**: Modify `assets/css/styles.css`
- **Functionality**: Update `assets/js/main.js`
- **SEO**: Update meta tags and sitemap as needed

## Support
For technical support or content updates, contact QuoteChop LLC through the website contact form.

---
© 2024 QuoteChop LLC. All rights reserved.
