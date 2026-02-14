# 7. Technical: The CKB Firm Website

This document outlines the technical architecture, performance requirements, SEO implementation strategy, and analytics setup for The CKB Firm's new website. The goal is to build a high-performing, scalable, secure, and easily maintainable platform.

## 1. Tech Stack Decisions

We will leverage a modern Jamstack architecture for optimal performance, security, and developer experience.

*   **Frontend Framework:** **Next.js (React)**
    *   **Rationale:** Provides excellent developer experience, server-side rendering (SSR) or static site generation (SSG) for fast initial page loads (crucial for SEO), robust routing, and a large ecosystem.
*   **Headless CMS:** **Contentful**
    *   **Rationale:** Cloud-native, highly flexible content modeling (as defined in `04-content-schema.md`), excellent API for fetching content, good for non-technical content editors.
*   **Styling:** **Tailwind CSS**
    *   **Rationale:** Utility-first CSS framework for rapid and consistent styling, highly customizable, and produces small CSS bundles. Integrates well with Next.js.
*   **Hosting:** **Vercel**
    *   **Rationale:** Optimized for Next.js deployments, provides global CDN, automatic SSL, serverless functions, and excellent continuous deployment (CI/CD) capabilities.
*   **Forms:** **Formspark** or similar serverless form endpoint
    *   **Rationale:** Secure, reliable form submission handling without requiring backend server maintenance, integrates with reCAPTCHA. Data will then be pushed to CRM.
*   **Version Control:** **Git (GitHub)**
    *   **Rationale:** Industry standard for collaborative development, integrated with Vercel for CI/CD.

## 2. Performance Requirements

The website will be engineered for exceptional performance, aiming to exceed industry benchmarks and Google's Core Web Vitals.

*   **Core Web Vitals (CWV) Scores:** Target "Good" status for all metrics on both desktop and mobile.
    *   **Largest Contentful Paint (LCP):** < 2.5 seconds
    *   **First Input Delay (FID):** < 100 milliseconds
    *   **Cumulative Layout Shift (CLS):** < 0.1
*   **Page Load Time:**
    *   Initial load for main pages: < 2 seconds (on a fast 3G connection).
    *   Subsequent navigation: Near-instantaneous (via Next.js prefetching).
*   **Image Optimization:**
    *   Implement **Next.js Image Component** for automatic optimization, responsive image delivery (`srcset`, `sizes`), lazy loading, and WebP/AVIF format conversion.
    *   All images uploaded to CMS will be served through Contentful's CDN with optimal compression.
*   **Code Splitting & Minification:** Next.js will automatically handle code splitting for pages and components, delivering only the necessary JavaScript for each view. All CSS and JavaScript will be minified.
*   **CDN (Content Delivery Network):** Vercel's global CDN will ensure fast asset delivery to users worldwide. Contentful's CDN will serve all media.
*   **Caching:** Aggressive caching strategies (browser, CDN, server-side) will be implemented to minimize load times.
*   **Font Loading:** Optimize font loading to prevent layout shifts (CLS) using `font-display: optional` or `swap` and preloading critical fonts.

## 3. SEO Implementation

A robust SEO strategy will be built into the core technical foundation and content management.

*   **Semantic HTML5:** Use appropriate HTML5 tags (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`, `<h1>`-`<h6>`, `<p>`, `<a>`, `<img>`) for clear structure and search engine understanding.
*   **Clean URL Structures:** Implement the URL patterns defined in `03-pages.md` (e.g., `/services/commercial-litigation`, `/attorneys/michael-s-baim`). Next.js dynamic routing will facilitate this.
*   **Dynamic Meta Titles & Descriptions:** Next.js `Head` component will dynamically generate unique `<title>` and `<meta name="description">` tags for every page, attorney profile, service page, and insight post, drawing directly from the `seoMeta` fields in Contentful.
*   **Schema.org Markup (Structured Data):**
    *   **JSON-LD** will be used to implement the following schemas:
        *   `LocalBusiness`: On homepage and contact page.
        *   `Attorney`: On each attorney profile page.
        *   `Service`: On each service detail page.
        *   `Article` / `BlogPosting`: On each insight article page.
    *   This will enhance search engine understanding and potentially enable rich snippets.
*   **XML Sitemap:** Dynamically generated XML sitemap (`/sitemap.xml`) by Next.js, updated automatically when new content is published in Contentful.
*   **Robots.txt:** Configured to allow full crawling of public pages and disallow sensitive or irrelevant paths.
*   **Canonical Tags:** Implemented using `<link rel="canonical">` in the `<head>` of each page, drawing from `canonicalUrl` in Contentful's `seoMeta` component, or defaulting to the current page's URL to prevent duplicate content issues.
*   **Image Alt Text:** All images will have descriptive `alt` attributes, managed via Contentful's media library.
*   **Mobile-First Indexing:** The responsive design and performance optimizations ensure the site is fully optimized for mobile-first indexing.
*   **SSR/SSG:** Next.js's ability to pre-render pages ensures that content is available to search engine crawlers immediately, even for dynamic content.

## 4. Analytics Setup

Comprehensive tracking will be implemented to monitor website performance and user behavior, providing actionable insights.

*   **Google Analytics 4 (GA4):**
    *   **Implementation:** GA4 will be integrated via **Google Tag Manager (GTM)**.
    *   **Standard Tracking:** Page views, sessions, user demographics, traffic sources.
    *   **Enhanced Measurement:** Automatically track scrolls, outbound clicks, site search, video engagement, file downloads.
    *   **Custom Events:**
        *   `form_submission_success`: For contact form submissions.
        *   `phone_call_initiated`: For clicks on `tel:` links.
        *   `newsletter_signup_success`: For newsletter subscriptions.
        *   `cta_click`: Track clicks on key CTAs (e.g., "Explore Our Expertise," "Schedule a Consultation").
        *   `attorney_profile_view`: Track views of individual attorney profiles.
        *   `service_page_view`: Track views of individual service pages.
    *   **Conversion Tracking:** Key custom events (e.g., `form_submission_success`, `phone_call_initiated`) will be marked as conversions in GA4.
*   **Google Tag Manager (GTM):**
    *   **Purpose:** Centralized management of all tracking tags (GA4, potentially others like LinkedIn Insight Tag, Facebook Pixel) without requiring direct code changes to the website.
    *   **Data Layer:** A robust data layer will be implemented in Next.js to push relevant information (e.g., page type, content ID, attorney name) to GTM for more granular tracking.
*   **Google Search Console (GSC):**
    *   **Integration:** Website will be verified with GSC to monitor search performance, indexing status, crawl errors, and Core Web Vitals directly from Google's perspective.
*   **Call Tracking (Optional, Future):** For more precise measurement of phone call sources, a dedicated call tracking solution (e.g., CallRail) could be integrated, which GTM can facilitate.
*   **Dashboarding:** Data from GA4 and GSC will be used to build custom dashboards (e.g., in Looker Studio) to visualize key performance indicators and track against success metrics.