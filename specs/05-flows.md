# 5. Flows: The CKB Firm Website

This document details critical user journeys, conversion paths, navigation patterns, and error states for The CKB Firm's new website.

## 1. User Journeys

### Journey 1: Established Business Owner Seeking Commercial Litigation Counsel
**Goal:** Find an experienced attorney for a breach of contract dispute and initiate contact.

1.  **Entry Point:** User searches "breach of contract lawyer Chicago" on Google.
2.  **Landing Page:** User lands on `/services/commercial-litigation`.
    *   *Observation:* Hero section immediately validates their search, "Resolving Disputes, Protecting Your Business."
3.  **Exploration:** User scrolls through the "Overview" section, specifically reading the "Breach of Contract" accordion content.
    *   *Observation:* The content directly addresses their need for dispute resolution.
4.  **Attorney Discovery:** User scrolls to "Meet Our Commercial Litigation Attorneys" section. They click "View Profile" for Michael S. Baim, recognizing his "Managing Partner" title.
5.  **Profile Review:** User reviews Michael Baim's extensive bio, practice areas, and credentials. They feel confident in his expertise.
6.  **Call to Action:** User clicks the "Connect with Michael" button on his profile or the general "Contact Our Firm" CTA in the footer/sticky header.
7.  **Conversion:** User lands on `/contact`, fills out the form with their details and specific inquiry, selecting "Commercial Litigation" from the dropdown.
8.  **Confirmation:** User receives a "Thank you" message.

### Journey 2: Entrepreneur/Startup Founder Seeking Foundational Legal Guidance
**Goal:** Understand legal requirements for a new business and find an approachable firm.

1.  **Entry Point:** User searches "how to start a business in illinois legal" on Google.
2.  **Landing Page:** User lands on an insight article: `/insights/a-small-business-owners-guide-to-contracts-in-illinois`.
    *   *Observation:* The article provides valuable, easy-to-understand information.
3.  **Exploration & Trust Building:** User reads the article, noting the author (Michael S. Baim) and the firm's helpful tone. They see the "Protect Your Business: Contact Us for Contract Review" CTA within the article.
4.  **Service Discovery:** User clicks the "View Service" button on a "Commercial Litigation" card in the "Related Insights & Services" section to see the broader offerings.
5.  **Service Overview:** User lands on `/services/commercial-litigation` and then navigates up to `/services` via breadcrumbs or global nav to see all practice areas. They see "Business and Commercial Law."
6.  **Call to Action:** Feeling informed and confident, the user clicks the prominent "Contact Our Team" button in the sticky header or footer.
7.  **Conversion:** User lands on `/contact`, fills out the form, selecting "General Inquiry" or "Commercial Litigation" and describes their startup needs.
8.  **Confirmation:** User receives a "Thank you" message.

### Journey 3: Existing Client Seeking Contact Information/Quick Access
**Goal:** Quickly find the firm's phone number or address.

1.  **Entry Point:** User types `ckbfirm.com` directly into their browser or finds it via Google.
2.  **Landing Page:** User lands on `/`.
3.  **Quick Access:** User immediately sees the phone number in the sticky header or scrolls to the footer for contact details and the embedded map.
4.  **Action:** User clicks the "Call Us Now" CTA in the header/footer or the embedded Google Map for directions.

## 2. Conversion Paths

### Conversion Path 1: Contact Form Submission (Primary Conversion)

1.  **Trigger:** User reaches a point of readiness to inquire (e.g., after viewing an attorney profile, reading a service page, or finishing an insightful article).
2.  **Initial CTA:** "Contact Our Team," "Schedule a Consultation," "Get Strategic Counsel," "Connect with [Attorney Name]."
3.  **Destination:** `/contact` page.
4.  **Form Interaction:** User fills out:
    *   `Your Name` (Required)
    *   `Your Email` (Required)
    *   `Your Phone Number` (Optional)
    *   `Company Name` (Optional)
    *   `How Can We Help You?` (Required, dropdown with service categories and general inquiry)
    *   `Your Message` (Required, rich text area)
    *   `Checkbox: I understand that submitting this form does not create an attorney-client relationship.` (Required)
    *   `reCAPTCHA v3` (Invisible)
5.  **Submission:** User clicks "Send My Inquiry" button.
6.  **Validation:** Form fields are validated client-side (e.g., valid email format, required fields filled). If errors, display specific error messages next to fields.
7.  **Success State:** A success message is displayed on the page: "Thank you for contacting The CKB Firm. We have received your inquiry and a member of our team will be in touch shortly."
8.  **Backend Action:** Form data is sent to the integrated CRM and stored in the CMS.
9.  **Analytics Event:** `form_submission_success` event sent to GA4.

### Conversion Path 2: Direct Phone Call

1.  **Trigger:** User needs immediate assistance or prefers phone communication.
2.  **Initial CTA:** "Call Us Now," prominently displayed in header, footer, and contact page.
3.  **Interaction:** User clicks on the phone number (which is a `tel:` link on mobile for direct dialing) or manually dials.
4.  **Analytics Event:** `phone_call_initiated` event sent to GA4 (via GTM, potentially tracking clicks on `tel:` links).

### Conversion Path 3: Newsletter Signup

1.  **Trigger:** User values the firm's insights and wants to stay informed.
2.  **Initial CTA:** "Subscribe Now" (in footer or Insights page).
3.  **Form Interaction:** User enters email address into a dedicated input field.
4.  **Submission:** User clicks "Subscribe Now."
5.  **Validation:** Basic email format validation.
6.  **Success State:** A subtle confirmation message appears: "Thank you for subscribing! You'll receive our next insights directly."
7.  **Backend Action:** Email address is sent to the integrated email marketing platform (e.g., Mailchimp).
8.  **Analytics Event:** `newsletter_signup_success` event sent to GA4.

## 3. Navigation Patterns

### Global Header Navigation
*   **Logo (Left):** "The CKB Firm" logo, links to `/`.
*   **Primary Navigation (Center/Right):**
    *   `About` (`/about`)
    *   `Services` (`/services`)
        *   *Mega-Menu:* On hover/click, reveals categories (Commercial Litigation, Creditors’ Rights, Real Estate) with sub-service names, brief descriptions, and icons. Each sub-service links directly.
    *   `Attorneys` (`/attorneys`)
    *   `Insights` (`/insights`)
    *   `Contact` (`/contact`)
*   **Utility/CTA (Far Right):**
    *   Phone number (`tel:+13127048510`)
    *   "Contact Us" button (prominent, links to `/contact`)
*   **Sticky Behavior:** Header remains fixed at the top on scroll.
*   **Mobile Navigation:** Hamburger icon reveals a full-screen overlay menu with clear navigation links, nested for services.

### Footer Navigation
*   **Firm Logo & Tagline:** Left-aligned.
*   **Quick Links (Column 1):**
    *   Home (`/`)
    *   About Us (`/about`)
    *   Services (`/services`)
    *   Attorneys (`/attorneys`)
    *   Insights (`/insights`)
    *   Contact Us (`/contact`)
*   **Legal & Compliance (Column 2):**
    *   Privacy Policy (`/privacy-policy`)
    *   Terms of Service (`/terms-of-service`)
    *   Accessibility Statement (`/accessibility`)
*   **Contact Information (Column 3):**
    *   Address
    *   Phone Number (`tel:` link)
    *   Email Address (`mailto:` link)
*   **Social Media Icons:** LinkedIn, X (Twitter), Facebook.
*   **Copyright:** "© 2026 The CKB Firm. All rights reserved."

### Breadcrumbs
*   Implemented on all sub-pages (e.g., `Home > Services > Commercial Litigation`).
*   Example: `Home > Attorneys > Michael S. Baim`

### In-Content Navigation
*   **Related Content Modules:** "Related Insights," "Meet Our [Service] Attorneys" sections on relevant pages.
*   **Internal Links:** Hyperlinks within rich text content to other relevant pages, services, or attorney profiles.

## 4. Error States

### 404 - Page Not Found (`/404`)

*   **Message:** "Page Not Found. It looks like the page you were looking for doesn't exist or has moved."
*   **Helpful Content:**
    *   "You might try searching for what you need:" (with a search bar).
    *   "Or explore some of our key sections:" (links to Home, Services, Attorneys, Insights, Contact).
*   **Visuals:** A professional, non-alarming graphic that aligns with the brand, perhaps a subtle illustration of a broken link or a question mark.
*   **CTA:** "Return to Homepage"
    *   *Links to:* `/`

### Form Submission Errors

*   **Client-Side Validation Errors:**
    *   **Missing Required Field:** "This field is required." (Displayed directly below the empty field in red text).
    *   **Invalid Email Format:** "Please enter a valid email address." (Displayed below email field).
    *   **Checkbox Not Ticked:** "You must agree to the terms to submit." (Displayed below checkbox).
*   **Server-Side Submission Errors:**
    *   **Generic Error:** "There was an issue submitting your form. Please try again or contact us directly at [Phone Number]." (Displayed prominently at the top of the form).
    *   **reCAPTCHA Failure:** "Spam detection failed. Please try again." (Displayed at the top of the form).
*   **Visuals:** Error messages styled in red, with clear iconography (e.g., an 'X' or exclamation mark).

### Server Errors (e.g., 500, 503)

*   **Message:** "We're experiencing technical difficulties. Please try again in a few moments."
*   **Helpful Content:** "If the problem persists, please contact us directly at [Phone Number]."
*   **Visuals:** A simple, clean error page with brand elements but minimal design.
*   **CTA (Optional):** "Refresh Page"