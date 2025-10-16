# SentiMate Theme System Guide

## Overview
SentiMate supports seamless switching between light and dark themes with automatic localStorage persistence and smooth Framer Motion transitions.

## Design Tokens

### 🌙 Dark Theme (Default)
```
Background: hsl(222, 47%, 4%)       // #0b0d11
Card: hsl(220, 26%, 7%)             // #0f1114
Text Primary: hsl(218, 27%, 92%)    // #e7eef7
Text Secondary: hsl(218, 11%, 65%)  // #9aa0a6
Accent: hsl(261, 80%, 66%)          // #7c4dff
Success: hsl(145, 63%, 49%)         // #2ecc71
```

### ☀️ Light Theme
```
Background: hsl(219, 14%, 97%)      // #f7f8fa
Card: hsl(0, 0%, 100%)              // #ffffff
Text Primary: hsl(220, 9%, 12%)     // #1e1f25
Text Secondary: hsl(220, 9%, 46%)   // #5b5f68
Accent: hsl(261, 60%, 64%)          // #6b4eff
Success: hsl(145, 63%, 42%)         // #27ae60
```

## Usage

### Theme Hook
```tsx
import { useTheme } from "@/hooks/useTheme";

function MyComponent() {
  const { theme, toggleTheme, setTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current: {theme}
    </button>
  );
}
```

### Card Component Variants
```tsx
import { Card } from "@/components/Card";

// Flat card - solid background
<Card variant="flat">Content</Card>

// Glass card - frosted glass effect
<Card variant="glass">Content</Card>

// Elevated card - with shadow
<Card variant="elevated">Content</Card>

// With hover effect
<Card variant="glass" hover>Content</Card>
```

### Theme Toggle Component
```tsx
import { ThemeToggle } from "@/components/ThemeToggle";

// Automatically handles theme switching with smooth animation
<ThemeToggle />
```

## Color System

All colors use semantic tokens from `src/index.css`:

```tsx
// ✅ CORRECT - Use semantic tokens
className="bg-card text-foreground border-border"
className="text-primary bg-primary/10"

// ❌ WRONG - Don't use direct colors
className="bg-white text-black"
className="text-purple-500"
```

## Animations

Theme transitions use Framer Motion for smooth crossfades:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

## Persistence

Theme preference is automatically saved to `localStorage` under the key `sentimate-theme` and applied on page load.

## System Preference Detection

On first visit, the app detects system preference using `prefers-color-scheme` media query.

## Accessibility

- All interactive elements maintain WCAG AA contrast ratios in both themes
- Focus rings are visible with purple outline (`ring-primary`)
- Keyboard navigation fully supported (Tab + Enter/Space)

## Typography

- **Headlines**: Inter (400, 500, 600, 700)
- **Body**: Poppins (300, 400, 500, 600)

## Component Guidelines

When creating new components:

1. Always use semantic color tokens
2. Wrap in `<Card>` for consistent styling
3. Add hover states with `hover:` variants
4. Use `text-foreground` for primary text
5. Use `text-muted-foreground` for secondary text
6. Test in both light and dark themes

## Example Component

```tsx
import { Card } from "@/components/Card";
import { useTheme } from "@/hooks/useTheme";

export function MyComponent() {
  const { theme } = useTheme();
  
  return (
    <Card variant="glass" hover>
      <h2 className="text-foreground font-semibold">Title</h2>
      <p className="text-muted-foreground">
        This text adapts to {theme} theme
      </p>
      <div className="rounded-xl bg-primary/10 p-4">
        <span className="text-primary">Accent content</span>
      </div>
    </Card>
  );
}
```
