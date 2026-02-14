# Pragma: AI Coding Agent Instructions

**Project**: Valentine's Day themed React website - a personalized love letter experience with interactive animations.

## Architecture Overview

**Tech Stack**: React 19.2 + TypeScript 5.9 + Vite 7.3 + Framer Motion 12.34 + Tailwind CSS

**Component Structure** (`src/components/`):
- `Hero.tsx` - Hero section with "To My Love" headline and floating hearts
- `Story.tsx` - Memory timeline with 3 key relationship moments
- `LoveLanguage.tsx` - Grid of 4 "reasons you're special" cards
- `Letter.tsx` - Formal love letter with envelope styling
- `Memories.tsx` - Additional memories section (if populated)

Each component is fully self-contained with its own animation data and styling.

## Animation Patterns (Framer Motion)

All animations follow these patterns:

**Scroll-triggered animations**:
```tsx
initial={{ opacity: 0, y: 30 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.8 }}
```

**Hover effects**:
```tsx
whileHover={{ scale: 1.05, rotate: 2 }}  // Card elevation + slight tilt
```

**Repeating animations**:
```tsx
animate={{ scale: [1, 1.1, 1] }}
transition={{ duration: 2, repeat: Infinity }}
```

**Staggered list animations** - Use `delay: index * 0.1` pattern for sequential timing within arrays.

**Fixed background layers** - Use `position: fixed; inset-0; pointer-events-none` for background decorations (floating emojis, stickers) that don't scroll with content.

## Data Organization

Components define animation/display data as inline arrays:
```tsx
const items = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  delay: Math.random() * 2,
  duration: 3 + Math.random() * 2,
}));
```

Use `centeredPercent()` helper for responsive positioning: `Math.max(0, Math.min(100, 50 + (Math.random() - 0.5) * spread))%`

## Responsive Design

All components support **mobile-first design** with Tailwind prefixes:
- `sm:` (640px) - Tablet breakpoint, used to increase font sizes and padding
- `md:` (768px) - Desktop breakpoint, shows desktop stickers; hides mobile variants

Example pattern:
```tsx
<div className="text-4xl sm:text-5xl md:text-6xl">  {/* Scaling text */}
<div className="hidden md:block">  {/* Desktop-only stickers */}
<div className="md:hidden">  {/* Mobile-only content */}
```

## Tailwind Custom Utilities

Defined in `src/index.css` `@layer utilities`:

- `.text-love` - Gradient text (pink → magenta → rose) for headings
- `.font-romantic` - Dancing Script font for titles
- `.font-elegant` - Playfair Display serif for formal text
- `.shadow-love` - Pink shadow: `0 10px 40px rgba(236, 72, 153, 0.2)`
- `.animate-float` - Vertical bob animation (-20px range)
- `.animate-pulse-heart` - Scale pulse animation (1 → 1.1)

Always use `.text-love` for h1/h2 headings, `.shadow-love` for card depth. Custom animations must be added to CSS `@keyframes`.

## Build Commands

- **Development**: `npm run dev` → Vite dev server (HMR enabled)
- **Production build**: `npm run build` → TypeScript type-check (`tsc -b`) + Vite bundle
- **Linting**: `npm run lint` → ESLint with React hooks rules
- **Preview**: `npm run preview` → Preview built artifacts locally

**Build order matters**: TypeScript must pass before Vite bundling. Type errors block production builds.

## Color Scheme

Primary palette from `index.css` body gradient:
- Base: `#fff0f3` (light pink background)
- Accent: Pink (`#ec4899`), Magenta (`#d946ef`), Rose (`#f43f5e`)
- Use Tailwind's `pink-*`, `purple-*`, `rose-*` scales (400-500 for cards, 100 for backgrounds)

## Common Development Tasks

**Adding a new section**:
1. Create `src/components/SectionName.tsx`
2. Use Framer Motion patterns above (scroll triggers, stagger delays)
3. Define data inline (memories, reasons, etc.)
4. Compose in `App.tsx` within the centered content container (z-10)

**Updating animation timings**: Parameters in `transition={{ duration, delay, repeat, ease }}` - adjust `duration` (seconds) and `delay` (stagger factor).

**Fixing mobile layout**: Check `md:hidden` vs `hidden md:block` logic. Mobile uses fewer stickers and larger touch targets.

**Adding background decorations**: Place in fixed position layer before centered content. Ensure `pointer-events-none` to avoid interaction blocking.

## Key Files Reference

- `App.tsx` - Main component composition, background layers setup
- `src/index.css` - Tailwind directives, custom utilities, @keyframes, font imports
- `vite.config.ts` - Minimal config (React plugin only, no Tailwind config needed)
- `tsconfig.json` - Target ES2020, module ESNext

## Performance Notes

- Background emojis: 200 fixed elements + stickers (35 desktop, 18 mobile) = animation-heavy
- Framer Motion uses GPU acceleration for transforms/opacity
- Avoid adding `will-change` without measuring impact
- Use `viewport={{ once: true }}` to prevent re-animation on scroll up
