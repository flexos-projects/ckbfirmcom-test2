# 6. Design: The CKB Firm Website

This document provides a comprehensive specification for the visual design of The CKB Firm's new website, including design tokens, component specifications, animation guidelines, and responsive breakpoints. The goal is to create an award-winning, modern, authoritative, and client-centric digital experience.

## 1. Design Tokens

### Colors

Our palette is refined from the existing brand blue and red, elevated with sophisticated neutrals and a subtle accent gold, ensuring professionalism, legibility, and a modern feel.

*   **Primary Blue (`--color-primary-blue`):** `#2B5878`
    *   *Usage:* Main brand color, primary CTA backgrounds, key headings, navigation accents.
    *   *Rationale:* Deeper, richer evolution of existing blue, conveying trust and authority.
*   **Primary Red (`--color-primary-red`):** `#8B2237`
    *   *Usage:* Accent color, secondary CTA backgrounds, subtle highlights, "CKB" in logo.
    *   *Rationale:* More saturated, modern evolution of existing red, conveying strength and dynamism.
*   **Accent Gold (`--color-accent-gold`):** `#D4AF37`
    *   *Usage:* Subtle highlights, iconography (selectively), decorative elements, hover states for certain interactive elements.
    *   *Rationale:* Introduces a touch of sophistication and premium feel without overpowering.
*   **Dark Neutral (`--color-text-dark`):** `#1A1A1A`
    *   *Usage:* All body text, main headings, footer background.
    *   *Rationale:* Replaces problematic light grays, ensuring optimal readability and WCAG AA contrast compliance.
*   **Medium Neutral (`--color-text-medium`):** `#5C5C5C`
    *   *Usage:* Secondary text, sub-headlines, form labels, disabled states.
    *   *Rationale:* Provides contrast against light backgrounds while being less stark than pure black.
*   **Light Neutral (`--color-background-light`):** `#F8F8F8`
    *   *Usage:* Primary background color for most sections, card backgrounds.
    *   *Rationale:* Replaces dated light gray, offering a clean, modern canvas with subtle warmth.
*   **White (`--color-white`):** `#FFFFFF`
    *   *Usage:* Card backgrounds, modal backgrounds, text on dark backgrounds.
*   **Success Green (`--color-status-success`):** `#28A745`
    *   *Usage:* Form success messages, positive status indicators.
*   **Error Red (`--color-status-error`):** `#DC3545`
    *   *Usage:* Form error messages, validation alerts.

### Typography

A sophisticated blend of a classic serif for impactful headlines and a modern, highly legible sans-serif for body text and functional elements.

*   **Font Family 1 (Serif - Headings):** `Trajan Pro 3`, `serif`
    *   *Usage:* H1, H2, and select prominent display text (e.g., hero headlines).
    *   *Rationale:* Honors the existing logo's classic feel, conveying tradition and authority.
*   **Font Family 2 (Sans-serif - Body & UI):** `Inter`, `sans-serif`
    *   *Usage:* H3, H4, H5, H6, body copy, navigation, buttons, form elements.
    *   *Rationale:* A highly readable, modern, and versatile sans-serif that ensures clarity and accessibility across all devices.

#### Font Sizes (Base `16px` for body copy)

*   `--font-size-xxl` (H1): `3.75rem` (`60px`) on desktop, `2.5rem` (`40px`) on mobile.
*   `--font-size-xl` (H2): `2.5rem` (`40px`) on desktop, `2rem` (`32px`) on mobile.
*   `--font-size-lg` (H3): `1.75rem` (`28px`) on desktop, `1.5rem` (`24px`) on mobile.
*   `--font-size-md` (H4): `1.25rem` (`20px`).
*   `--font-size-base` (Body): `1rem` (`16px`).
*   `--font-size-sm` (Small text/captions): `0.875rem` (`14px`).
*   `--font-size-xs` (Utility/Micro text): `0.75rem` (`12px`).

#### Line Heights

*   `--line-height-heading`: `1.2`
*   `--line-height-body`: `1.6`
*   `--line-height-tight`: `1.1`

#### Letter Spacing

*   `--letter-spacing-tight`: `-0.02em` (for large headings)
*   `--letter-spacing-normal`: `0`
*   `--letter-spacing-wide`: `0.05em` (for uppercase utility text)

#### Font Weights

*   `--font-weight-light`: `300`
*   `--font-weight-regular`: `400`
*   `--font-weight-medium`: `500`
*   `--font-weight-semibold`: `600`
*   `--font-weight-bold`: `700`

### Spacing

A modular spacing scale for consistent padding, margins, and gaps. Base unit `8px`.

*   `--spacing-xxs`: `4px`
*   `--spacing-xs`: `8px`
*   `--spacing-sm`: `16px`
*   `--spacing-md`: `24px`
*   `--spacing-lg`: `32px`
*   `--spacing-xl`: `48px`
*   `--spacing-xxl`: `64px`
*   `--spacing-xxxl`: `96px`
*   `--spacing-xxxxl`: `128px`

### Border Radius

Subtle rounding for a modern, approachable feel.

*   `--border-radius-sm`: `4px`
*   `--border-radius-md`: `8px`
*   `--border-radius-lg`: `12px`
*   `--border-radius-full`: `9999px` (for pills/avatars)

### Shadows

Minimal, elegant shadows for depth and hierarchy.

*   `--shadow-sm`: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`
*   `--shadow-md`: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
*   `--shadow-lg`: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`

## 2. Component Specifications

### Logo

*   **Design:** Recreated vector version of "THE CKB FIRM" logotype. "CKB" in `--color-primary-red`, "THE FIRM" in `--color-primary-blue`. "ATTORNEYS AT LAW" sub-line in `--color-text-medium` or `--color-primary-blue`.
*   **Usage:** Header, footer, favicon.
*   **Size (Header):** Max height `40px` on desktop, `32px` on mobile.

### Buttons

*   **Primary Button:**
    *   **Background:** `--color-primary-blue`
    *   **Text:** `--color-white`
    *   **Border Radius:** `--border-radius-sm`
    *   **Padding:** `--spacing-sm` `--spacing-lg` (`16px 32px`)
    *   **Font:** `Inter`, `--font-weight-semibold`, `--font-size-base`, `uppercase`, `--letter-spacing-wide`
    *   **Hover:** Background `--color-primary-red`, subtle `--shadow-sm`
*   **Secondary Button:**
    *   **Background:** `--color-primary-red`
    *   **Text:** `--color-white`
    *   **Border Radius:** `--border-radius-sm`
    *   **Padding:** `--spacing-sm` `--spacing-lg` (`16px 32px`)
    *   **Font:** `Inter`, `--font-weight-semibold`, `--font-size-base`, `uppercase`, `--letter-spacing-wide`
    *   **Hover:** Background `--color-primary-blue`, subtle `--shadow-sm`
*   **Ghost Button:**
    *   **Background:** `transparent`
    *   **Text:** `--color-primary-blue`
    *   **Border:** `2px solid --color-primary-blue`
    *   **Border Radius:** `--border-radius-sm`
    *   **Padding:** `--spacing-sm` `--spacing-lg` (`16px 32px`)
    *   **Font:** `Inter`, `--font-weight-semibold`, `--font-size-base`, `uppercase`, `--letter-spacing-wide`
    *   **Hover:** Background `--color-primary-blue` (20% opacity), text `--color-primary-blue`.

### Navigation

*   **Global Header:**
    *   **Background:** `--color-white` (subtle `--shadow-sm` on scroll).
    *   **Links:** `Inter`, `--font-weight-medium`, `--font-size-base`, `--color-text-dark`.
    *   **Hover:** Text `--color-primary-blue`, subtle underline animation or accent bar.
    *   **Active:** Text `--color-primary-blue`, bold, accent bar.
    *   **Phone Number:** `--color-primary-blue`, `--font-weight-semibold`.
*   **Mega-Menu (Services):**
    *   **Background:** `--color-white` with a subtle gradient or texture.
    *   **Columns:** 3 columns for service categories.
    *   **Category Titles:** `Inter`, `--font-weight-bold`, `--font-size-md`, `--color-primary-blue`.
    *   **Service Links:** `Inter`, `--font-weight-regular`, `--font-size-base`, `--color-text-dark`.
    *   **Service Descriptions:** `Inter`, `--font-weight-light`, `--font-size-sm`, `--color-text-medium`.
    *   **Icons:** Custom SVG icons, `--color-accent-gold` or `--color-primary-blue`.
    *   **Hover:** Background light gray (`#F8F8F8`) for individual service links.

### Form Inputs

*   **Background:** `--color-white`
*   **Border:** `1px solid #D1D5DB`
*   **Border Radius:** `--border-radius-sm`
*   **Padding:** `--spacing-sm` `--spacing-md` (`16px 24px`)
*   **Text:** `Inter`, `--font-size-base`, `--color-text-dark`
*   **Placeholder:** `--color-text-medium` (lighter shade)
*   **Focus:** Border `2px solid --color-primary-blue`, subtle `--shadow-sm`.
*   **Error State:** Border `2px solid --color-status-error`, error message `--color-status-error`.

### Cards (Service, Attorney, Insight)

*   **Background:** `--color-white`
*   **Border Radius:** `--border-radius-md`
*   **Shadow:** `--shadow-sm`
*   **Padding:** `--spacing-lg` (`32px`)
*   **Content:**
    *   **Title:** `Inter`, `--font-weight-semibold`, `--font-size-md`, `--color-primary-blue`.
    *   **Description/Excerpt:** `Inter`, `--font-weight-regular`, `--font-size-base`, `--color-text-dark`.
    *   **Image/Icon:** Prominently displayed, aligned with brand.
*   **Hover:** Subtle lift effect (`transform: translateY(-5px)`), `--shadow-md`.

### Hero Sections

*   **Layout:** Full-width, content centered within a max-width container (`1280px`).
*   **Background:** Can be a subtle dynamic pattern (generated need), abstract video loop, or high-quality, authentic photography (e.g., Chicago skyline for homepage, office interior for About).
*   **Text:** White or light text color over dark backgrounds, dark text over light backgrounds for optimal contrast.
*   **Headline (H1):** `Trajan Pro 3`, `--font-size-xxl`, `--font-weight-bold`.
*   **Sub-headline:** `Inter`, `--font-size-lg`, `--font-weight-regular`.

### Accordions/Tabs (for Service Key Items)

*   **Header:** `Inter`, `--font-weight-semibold`, `--font-size-md`, `--color-text-dark`, with an expand/collapse icon (e.g., `+` / `-`).
*   **Content:** `Inter`, `--font-size-base`, `--color-text-medium`, with `--spacing-sm` padding.
*   **Active State:** Header background slightly lighter (`#F8F8F8`), text `--color-primary-blue`.

## 3. Animation Guidelines

Animations should be subtle, purposeful, and enhance the user experience without being distracting or slowing down performance.

*   **Scroll Reveals:** Elements (sections, cards, images) can gracefully fade or slide into view as the user scrolls, using a slight delay and a smooth `ease-out` transition.
    *   *Duration:* `0.6s - 1s`
    *   *Ease:* `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
*   **Hover Effects:** Buttons and interactive cards should have subtle hover transitions (background color change, slight lift, border highlight).
    *   *Duration:* `0.2s`
    *   *Ease:* `ease-in-out`
*   **Navigation Transitions:** Smooth transitions for mega-menu opening/closing, mobile menu overlay.
*   **Loading States:** Minimal, branded loading spinners or skeleton screens for dynamic content loading.
*   **Iconography:** Subtle SVG animations on hover for interactive icons.

## 4. Responsive Breakpoints

The design will be built mobile-first, ensuring optimal experience across all devices.

*   **Mobile Small:** `320px` - `479px`
*   **Mobile Large:** `480px` - `767px`
*   **Tablet:** `768px` - `1023px`
*   **Desktop:** `1024px` - `1439px`
*   **Large Desktop:** `1440px`+

### Specific Responsive Considerations:

*   **Typography:** Scale font sizes down for mobile (as specified in Font Sizes).
*   **Navigation:** Hamburger menu for Tablet and below. Mega-menu transforms into an accordion-style dropdown for mobile.
*   **Layouts:**
    *   Multi-column layouts (e.g., feature cards, attorney cards, insight cards) will stack vertically on mobile.
    *   Hero sections will adjust image cropping and text positioning for optimal readability on smaller screens.
    *   Padding and margins will be adjusted using a responsive spacing scale (`--spacing-sm` to `--spacing-md` for horizontal, `--spacing-md` to `--spacing-lg` for vertical on mobile).
*   **Images:** All images will be responsive, using `srcset` and `sizes` attributes for optimal delivery.
*   **Touch Targets:** Ensure all interactive elements have sufficient touch target size (`min-44px x 44px`) for mobile users.