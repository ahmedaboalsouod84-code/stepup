# Optimization Changes - Manual Application Guide

## Priority 1 & 2: SEO Meta Tags + Font Loading Optimization

### File 1: `index.html` - Head Section (Lines 4-17)

**REPLACE this section:**
```html
<head>
    <!-- Meta Tags -->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Thememarch" />
    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="assets/img/logo stepup w.png" />
    <!-- Site Title -->
    <title>StepUp | Growth Agency</title>
    <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/lightgallery.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
```

**WITH this optimized version:**
```html
<head>
    <!-- Meta Tags -->
    <meta charset="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="StepUp" />
    <!-- Favicon Icon -->
    <link rel="icon" type="image/png" href="assets/img/logo stepup w.png" />
    <!-- Site Title -->
    <title>StepUp | Growth Agency</title>
    <!-- SEO Meta Tags -->
    <meta name="description" content="StepUp is a UAE-based growth agency specializing in digital marketing, creative design, content production, and exhibition execution across the Middle East." />
    <meta name="keywords" content="digital marketing, SEO, web development, creative agency, UAE, Dubai, GCC, growth agency" />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://stepuphub.cloud/" />
    <meta property="og:title" content="StepUp | Growth Agency" />
    <meta property="og:description" content="StepUp is a UAE-based growth agency specializing in digital marketing, creative design, content production, and exhibition execution across the Middle East." />
    <meta property="og:image" content="https://stepuphub.cloud/assets/img/logo stepup w.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://stepuphub.cloud/" />
    <meta property="twitter:title" content="StepUp | Growth Agency" />
    <meta property="twitter:description" content="StepUp is a UAE-based growth agency specializing in digital marketing, creative design, content production, and exhibition execution across the Middle East." />
    <meta property="twitter:image" content="https://stepuphub.cloud/assets/img/logo stepup w.png" />
    
    <!-- Resource Hints for Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    
    <!-- Google Fonts - Optimized Async Loading -->
    <link rel="preload" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
    <noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap" /></noscript>
    
    <link rel="stylesheet" href="assets/css/plugins/bootstrap.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/lightgallery.min.css" />
    <link rel="stylesheet" href="assets/css/plugins/swiper.min.css" />
    <link rel="stylesheet" href="assets/css/style.css" />
```

### File 2: `assets/css/style.css` - Line 54

**REPLACE:**
```css
@import url("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap");
```

**WITH:**
```css
/* Google Fonts moved to HTML head for better performance */
/* @import url("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;900&family=Kanit:wght@400;500;600;700&display=swap"); */
```

## Summary of Changes:
1. ✅ Updated author from "Thememarch" to "StepUp"
2. ✅ Added SEO meta description and keywords
3. ✅ Added Open Graph tags for Facebook/LinkedIn sharing
4. ✅ Added Twitter Card tags for Twitter sharing
5. ✅ Added preconnect hints for faster font loading
6. ✅ Moved Google Fonts to async loading in HTML
7. ✅ Commented out blocking @import in CSS
