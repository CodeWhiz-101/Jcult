# Typography

## Fonts

- `.font-base` - Inter (default body text)
- `.font-brand` - Raleway (headings, titles, numbers)

## Classes

| Class | Mobile | Tablet | Desktop | Usage |
|-------|--------|--------|---------|-------|
| `.text-hero-title` | 40px | 48px | 64px | Hero titles |
| `.text-hero-subtitle` | 20px | 20px | 20px | Hero subtitles |
| `.text-section-label` | 18px | 16px | 16px | Small labels |
| `.text-section-para` | 24px | 24px | 32px | Large paragraphs |
| `.text-section-title` | 40px | 40px | 48px | Section headings |
| `.text-section-content` | 20px | 20px | 20px | Body paragraphs |
| `.text-stats-number` | 46px | 66px | 75px | Stat numbers |
| `.text-stats-desc` | 16px | 16px | 18px | Stat descriptions |
| `.text-button` | 16px | 16px | 16px | Button text |

## Examples

```html
<!-- Hero -->
<h1 class="text-hero-title font-brand">Title</h1>
<p class="text-hero-subtitle">Subtitle</p>

<!-- Section -->
<h2 class="text-section-title font-brand">Heading</h2>
<p class="text-section-content">Content</p>

<!-- Stats -->
<div class="text-stats-number font-brand">2025</div>
<p class="text-stats-desc">Description</p>

<!-- Button -->
<button class="text-button">Click</button>
```

## Rules

1. Use `.font-brand` for headings and numbers
2. Body text uses `.font-base` by default
3. All classes are responsive
