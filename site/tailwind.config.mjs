/** @type {import('tailwindcss').Config} */
import designTokens from './tokens.json';

// Helper to convert rem values to px for responsive font sizes in comments, if needed.
// For Tailwind config, we primarily use rem.

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': designTokens.colors.primary,
        'primary-red': designTokens.colors.secondary,
        'accent-gold': designTokens.colors.accent,
        'background-light': designTokens.colors.background,
        'surface-white': designTokens.colors.surface,
        'text-dark': designTokens.colors.text,
        'text-medium': designTokens.colors.textMuted,
        'border-light': designTokens.colors.border,
        'status-error': designTokens.colors.error,
        'status-success': designTokens.colors.success,
        'status-warning': designTokens.colors.warning,
        'white': designTokens.colors.white,
      },
      fontFamily: {
        heading: ['"Trajan Pro 3"', 'serif'], // As specified in 06-design.md
        body: ['Inter', 'sans-serif'], // As specified in 06-design.md
        mono: designTokens.typography.fontFamily.mono,
      },
      fontSize: {
        // Desktop sizes, mobile will be handled with media queries in CSS or conditional classes
        'xs': designTokens.typography.fontSize.xs, // 12px
        'sm': designTokens.typography.fontSize.sm, // 14px
        'base': designTokens.typography.fontSize.base, // 16px
        'md': designTokens.typography.fontSize.md, // 20px
        'lg': designTokens.typography.fontSize.lg, // 28px (desktop H3)
        'xl': designTokens.typography.fontSize.xl, // 40px (desktop H2)
        'xxl': designTokens.typography.fontSize.xxl, // 60px (desktop H1)
      },
      fontWeight: {
        'light': designTokens.typography.fontWeight.light,
        'normal': designTokens.typography.fontWeight.normal,
        'medium': designTokens.typography.fontWeight.medium,
        'semibold': designTokens.typography.fontWeight.semibold,
        'bold': designTokens.typography.fontWeight.bold,
      },
      lineHeight: {
        'tight': designTokens.typography.lineHeight.tight, // 1.1
        'normal': designTokens.typography.lineHeight.normal, // 1.6
        'heading': '1.2', // Specific heading line height from 06-design.md
        'relaxed': designTokens.typography.lineHeight.relaxed, // 1.75
      },
      letterSpacing: {
        'tight': '-0.02em', // for large headings
        'normal': '0',
        'wide': '0.05em', // for uppercase utility text
      },
      spacing: {
        'xxs': designTokens.spacing.xxs, // 4px
        'xs': designTokens.spacing.xs,   // 8px
        'sm': designTokens.spacing.sm,   // 16px
        'md': designTokens.spacing.md,   // 24px
        'lg': designTokens.spacing.lg,   // 32px
        'xl': designTokens.spacing.xl,   // 48px
        '2xl': designTokens.spacing['2xl'], // 64px
        '3xl': designTokens.spacing['3xl'], // 96px
        'xxxxl': designTokens.spacing.xxxxl, // 128px
      },
      borderRadius: {
        'sm': designTokens.borderRadius.sm,   // 4px
        'md': designTokens.borderRadius.md,   // 8px
        'lg': designTokens.borderRadius.lg,   // 12px
        'full': designTokens.borderRadius.full, // 9999px
      },
      boxShadow: {
        'sm': designTokens.shadows.sm,
        'md': designTokens.shadows.md,
        'lg': designTokens.shadows.lg,
      },
      screens: {
        // Custom breakpoints from 06-design.md
        'mobile-sm': designTokens.breakpoints.mobileSmall, // 320px
        'mobile-lg': designTokens.breakpoints.mobileLarge, // 480px
        'tablet': designTokens.breakpoints.tablet,     // 768px
        'desktop': designTokens.breakpoints.desktop,   // 1024px
        'lg-desktop': designTokens.breakpoints.largeDesktop, // 1440px
        // Tailwind's default breakpoints are:
        // 'sm': '640px',
        // 'md': '768px', // Overlaps with 'tablet'
        // 'lg': '1024px', // Overlaps with 'desktop'
        // 'xl': '1280px',
        // '2xl': '1536px',
        // We will prioritize our custom breakpoints where they conflict or use them to define responsive behavior.
      },
      transitionDuration: {
        'fast': designTokens.animation.duration.fast, // 200ms
        'normal': designTokens.animation.duration.normal, // 600ms
        'slow': designTokens.animation.duration.slow, // 1000ms
      },
      transitionTimingFunction: {
        'default': designTokens.animation.easing.default,
        'in': designTokens.animation.easing.in,
        'out': designTokens.animation.easing.out,
        'in-out': designTokens.animation.easing.inOut, // Renamed to avoid conflict with default 'ease-in-out'
        'ease-out': designTokens.animation.easing.easeOut,
        'ease-in-out': designTokens.animation.easing.easeInOut, // Renamed to avoid conflict with default 'ease-in-out'
      },
    },
  },
  plugins: [],
};