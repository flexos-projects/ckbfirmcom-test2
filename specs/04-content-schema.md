# 4. Content Schema: The CKB Firm Website

This document defines the content types, fields, relationships, and SEO requirements for The CKB Firm's website, to be implemented within a Headless CMS (e.g., Contentful, Strapi, Sanity).

## 1. Global Settings (Singleton)

*   **Content Type Name:** `Global Settings`
*   **Description:** Centralized content for site-wide elements.
*   **Fields:**
    *   `siteName` (Text): "The CKB Firm"
    *   `tagline` (Text): "When Collections are Key to your Business" (Evolved to "Strategic Legal Partner for Chicago's Growth")
    *   `primaryPhone` (Text): "+1 (312) 704-8510"
    *   `primaryEmail` (Email): (e.g., `info@ckbfirm.com`)
    *   `officeAddress` (Rich Text): Formatted address for footer/contact.
    *   `googleMapsEmbedUrl` (URL): URL for Google Maps iframe embed.
    *   `linkedinUrl` (URL): Firm's LinkedIn profile.
    *   `twitterUrl` (URL): Firm's X (Twitter) profile.
    *   `facebookUrl` (URL): Firm's Facebook profile.
    *   `defaultSeoTitle` (Text): Fallback SEO Title for pages without specific override.
    *   `defaultSeoDescription` (Text): Fallback SEO Description.
    *   `privacyPolicyPage` (Reference): Link to Privacy Policy Page content type.
    *   `termsOfServicePage` (Reference): Link to Terms of Service Page content type.
    *   `newsletterSignupHeadline` (Text): "Get Our Latest Insights Delivered."
    *   `newsletterSignupSubheadline` (Text): "Subscribe to The CKB Firm's newsletter for timely legal updates and strategic business advice straight to your inbox."

## 2. Page (Flexible Content Blocks)

*   **Content Type Name:** `Page`
*   **Description:** General purpose page content, built with flexible content blocks.
*   **Fields:**
    *   `title` (Text): Page Title (e.g., "About Us," "Contact Us")
    *   `slug` (Slug): URL slug (e.g., `/about`, `/contact`). Auto-generated from title, editable.
    *   `seoMeta` (Object/Component - *See SEO Meta Component below*): SEO-specific fields.
    *   `sections` (Flexible Content/Array of Components):
        *   `HeroSection` (Component): Headline, Sub-headline, Primary CTA, Secondary CTA, Background Image/Video.
        *   `TextSection` (Component): Headline, Sub-headline, Body (Rich Text), Optional CTA.
        *   `FeatureCardsSection` (Component): Headline, Sub-headline, Array of Feature Cards (Title, Description, Icon, CTA).
        *   `TestimonialSection` (Component): Headline, Quote, Attribution, Optional CTA.
        *   `InsightsSection` (Component): Headline, Sub-headline, Array of Insight References (dynamic pull).
        *   `AttorneysSection` (Component): Headline, Sub-headline, Array of Attorney References.
        *   `AffiliationsSection` (Component): Headline, Sub-headline, Array of Affiliation References.
        *   `ContactFormSection` (Component): Headline, Sub-headline, Body (Rich Text), Contact Form (pre-configured).
        *   `MapSection` (Component): Headline, Address (Rich Text), Phone (Text), Map Embed URL.

## 3. Attorney

*   **Content Type Name:** `Attorney`
*   **Description:** Profile for each attorney.
*   **Fields:**
    *   `fullName` (Text): "Michael S. Baim"
    *   `slug` (Slug): URL slug (e.g., `/attorneys/michael-s-baim`). Auto-generated, editable.
    *   `title` (Text): "Managing Partner"
    *   `role` (Text): "Attorney" (Used for internal categorization, e.g., "Senior Trial Attorney")
    *   `headshot` (Media): Professional photo.
    *   `bioSummary` (Text - Short): A brief, compelling summary for attorney cards.
    *   `fullBio` (Rich Text): Detailed biography.
    *   `barAdmissions` (Rich Text/Array of Text): "Illinois, 1990"
    *   `education` (Rich Text/Array of Text): List of degrees and institutions.
    *   `practiceAreas` (Array of References): Links to `Service` content types.
    *   `pastEmployment` (Rich Text/Array of Text): Previous roles and firms.
    *   `directEmail` (Email): Optional direct email for attorney.
    *   `linkedinUrl` (URL): Optional LinkedIn profile.
    *   `relatedInsights` (Array of References): Links to `Insight` content types authored by this attorney.
    *   `seoMeta` (Object/Component): SEO-specific fields.

## 4. Service

*   **Content Type Name:** `Service`
*   **Description:** Individual legal services offered.
*   **Fields:**
    *   `name` (Text): "Commercial Litigation"
    *   `slug` (Slug): URL slug (e.g., `/services/commercial-litigation`). Auto-generated, editable.
    *   `category` (Text/Dropdown): "Commercial Litigation", "Creditors’ Rights", "Real Estate".
    *   `icon` (Media): Custom SVG icon for the service.
    *   `shortDescription` (Text - Short): For service cards/mega-menu.
    *   `heroHeadline` (Text): "Commercial Litigation: Strategic Resolution."
    *   `heroSubheadline` (Text): "Navigate complex business conflicts with The CKB Firm. We provide robust legal strategies to protect your interests and achieve decisive outcomes."
    *   `overviewHeadline` (Text): "Tenacious Representation for Critical Business Conflicts."
    *   `overviewBody` (Rich Text): Detailed description of the service.
    *   `keyServiceItems` (Array of Components - *See Key Service Item Component below*): Sub-services with detailed descriptions.
    *   `approachHeadline` (Text): "A Methodical Path to Resolution."
    *   `approachSteps` (Array of Components - *See Step Component below*): Steps in the firm's approach.
    *   `relatedAttorneys` (Array of References): Links to `Attorney` content types specializing in this service.
    *   `relatedInsights` (Array of References): Links to `Insight` content types relevant to this service.
    *   `seoMeta` (Object/Component): SEO-specific fields.

## 5. Insight (Blog Post)

*   **Content Type Name:** `Insight`
*   **Description:** Blog posts, articles, legal updates.
*   **Fields:**
    *   `title` (Text): "A Small Business Owner's Guide to Contracts in Illinois"
    *   `slug` (Slug): URL slug (e.g., `/insights/a-small-business-owners-guide-to-contracts-in-illinois`). Auto-generated, editable.
    *   `featuredImage` (Media): Image for article cards and hero.
    *   `category` (Reference/Array of References): Link to `Service` category or dedicated `InsightCategory` content type.
    *   `author` (Reference): Link to `Attorney` content type.
    *   `publishDate` (Date & Time): Date of publication.
    *   `readTime` (Number): Estimated read time in minutes.
    *   `excerpt` (Text - Short): For article cards and meta description.
    *   `body` (Rich Text): Full article content, supporting headings, paragraphs, lists, quotes, images.
    *   `seoMeta` (Object/Component): SEO-specific fields.

## 6. Testimonial

*   **Content Type Name:** `Testimonial`
*   **Description:** Client feedback and quotes.
*   **Fields:**
    *   `clientName` (Text): "CEO, Chicago Manufacturing Co."
    *   `quote` (Text - Long): Full testimonial text.
    *   `isFeatured` (Boolean): Checkbox to feature on homepage or key pages.

## 7. Affiliation

*   **Content Type Name:** `Affiliation`
*   **Description:** Professional organizations and partnerships.
*   **Fields:**
    *   `name` (Text): "Commercial Law League of America (CLLA)"
    *   `logo` (Media): Organization's logo.
    *   `url` (URL): Link to the organization's website.

## Shared Components (Reusable Objects/Components in CMS)

### SEO Meta Component

*   **Content Type Name:** `SeoMeta`
*   **Description:** Reusable SEO fields for any content type.
*   **Fields:**
    *   `metaTitle` (Text): Specific page title for SEO.
    *   `metaDescription` (Text - Long): Description for search engines.
    *   `canonicalUrl` (URL): Override canonical URL if needed.
    *   `ogTitle` (Text): Open Graph Title (for social sharing).
    *   `ogDescription` (Text - Long): Open Graph Description.
    *   `ogImage` (Media): Open Graph Image.
    *   `noIndex` (Boolean): Checkbox to prevent indexing.

### Key Service Item Component (for `Service` content type)

*   **Content Type Name:** `KeyServiceItem`
*   **Description:** Represents a sub-service within a main service.
*   **Fields:**
    *   `title` (Text): "Breach of Contract"
    *   `content` (Rich Text): Detailed description of the sub-service.

### Step Component (for `Service` approach)

*   **Content Type Name:** `Step`
*   **Description:** Represents a step in a process.
*   **Fields:**
    *   `title` (Text): "Thorough Assessment"
    *   `description` (Text - Long): Explanation of the step.

## SEO Requirements for CMS Implementation

1.  **Dynamic Meta Titles & Descriptions:** The CMS must allow for unique `metaTitle` and `metaDescription` fields for *every* page, attorney profile, service page, and insight post. If left empty, fall back to `defaultSeoTitle`/`defaultSeoDescription` from Global Settings, combined with content title.
2.  **Clean URL Slugs:** All content types (`Page`, `Attorney`, `Service`, `Insight`) must have editable `slug` fields that are auto-generated from the title but can be manually overridden for SEO optimization.
3.  **Schema.org Markup:**
    *   **LocalBusiness Schema:** Implemented for the entire site, especially on the homepage and contact page, including `name`, `address`, `telephone`, `url`, `geo`, `openingHours`, `review` (if applicable).
    *   **Attorney Schema:** Specific markup for each `Attorney` profile page, detailing `name`, `jobTitle`, `alumniOf`, `hasCredential`, `memberOf`.
    *   **Article Schema:** Implemented for all `Insight` posts, including `headline`, `image`, `datePublished`, `dateModified`, `author`, `publisher`.
    *   **Service Schema:** For each `Service` page, detailing `name`, `description`, `provider`, `areaServed`.
4.  **Image Optimization:** CMS should facilitate automatic image compression and conversion to modern formats (WebP/AVIF) upon upload, with fields for `alt text` and `title text` for accessibility and SEO.
5.  **Canonical Tags:** Implement canonical URLs on all pages to prevent duplicate content issues.
6.  **XML Sitemap:** The CMS or front-end framework should automatically generate and keep updated an XML sitemap for search engines.
7.  **Robots.txt:** Configurable `robots.txt` file to guide search engine crawlers.
8.  **Internal Linking:** Encourage and facilitate internal linking within Rich Text fields (e.g., linking from an Insight post to a relevant Service page or Attorney profile).
9.  **Mobile-First Indexing:** Ensure all content and structured data are fully accessible and render correctly on mobile devices.