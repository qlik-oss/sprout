# @qlik/sprout-icons

A comprehensive icon library for Qlik Sprout, available as React and Vue components.

## Features

- 📦 Framework agnostic SVG icons
- ⚛️ React components with full TypeScript support
- 🖖 Vue 3 components
- 🎨 Customizable via SVG props
- 📐 Multiple size options
- 🎯 Tree-shakeable exports

## Installation

```bash
npm install @qlik/sprout-icons
```

Or with pnpm:

```bash
pnpm add @qlik/sprout-icons
```

## Usage

### React

Import icons directly from the React package and use them as components:

```tsx
import { AddIcon, DeleteIcon, SearchIcon } from "@qlik/sprout-icons/react";

export function MyComponent() {
  return (
    <div>
      <AddIcon />
      <DeleteIcon className="size-xl" />
      <SearchIcon style={{ color: "red" }} />
    </div>
  );
}
```

Icons accept any SVG element attributes, allowing you to customize:

- **Styling**: `className`, `style`, inline CSS properties
- **Dimensions**: `width`, `height`, or use Sprout size classes (`size-s`, `size-m`, `size-l`, etc.)
- **Attributes**: `data-*`, `aria-*`, and other SVG attributes

```tsx
import { DownloadIcon } from "@qlik/sprout-icons/react";

<DownloadIcon className="size-2xl text-primary" aria-label="Download file" />;
```

### Vue

Import icons from the Vue package:

```vue
<script setup>
import { AddIcon, DeleteIcon, SearchIcon } from "@qlik/sprout-icons/vue";
</script>

<template>
  <div>
    <add-icon />
    <delete-icon class="size-xl" />
    <search-icon :style="{ color: 'red' }" />
  </div>
</template>
```

Vue components support the same customization options as React components.

## Available Icons

Browse all available icons in the [Storybook documentation](./storybook). The Storybook playground includes:

- A searchable gallery of all icons
- Live size preview
- Component code samples

## Icon Naming Convention

All icon component names follow the pattern: `{name}Icon`

For example:

- `AddIcon`
- `DeleteIcon`
- `ChevronDownIcon`
- `AlertCircleIcon`

## Size Options

Use Sprout's size tokens via the `size-{size}` class or inline CSS:

- `size-s` - Small
- `size-m` - Medium
- `size-l` - Large
- `size-xl` - Extra Large
- `size-2xl`, `size-3xl`, ... `size-7xl` - Extra sizes

```tsx
import { StarIcon } from "@qlik/sprout-icons/react";

<StarIcon className="size-s" /> {/* Small */}
<StarIcon className="size-xl" /> {/* Extra Large */}
<StarIcon style={{ width: "32px", height: "32px" }} /> {/* Custom */}
```

## Styling Tips

### With Tailwind CSS

```tsx
import { AlertIcon } from "@qlik/sprout-icons/react";

<AlertIcon className="w-6 h-6 text-red-500" />;
```

### With CSS Modules

```tsx
import { CheckIcon } from "@qlik/sprout-icons/react";
import styles from "./MyComponent.module.css";

<CheckIcon className={styles.icon} />;
```

### Inline Styles

```tsx
import { InfoIcon } from "@qlik/sprout-icons/react";

<InfoIcon style={{ width: "24px", height: "24px", color: "#0066cc" }} />;
```

## Accessibility

Icons are semantic SVG elements. When using icons that convey meaning:

```tsx
import { DownloadIcon, WarningIcon } from "@qlik/sprout-icons/react";

{
  /* Decorative icon - no label needed */
}
<button>
  <DownloadIcon className="size-m" aria-hidden="true" />
</button>;

{
  /* Icon conveying meaning - add label */
}
<button aria-label="Download file">
  <DownloadIcon className="size-m" />
</button>;

{
  /* With text content - icon is decorative */
}
<span>
  <WarningIcon className="size-m" aria-hidden="true" />
  Important notice
</span>;
```

## Contributing

Icons are sourced from the `./svg` directory and automatically compiled to React and Vue components. To add or modify icons:

1. Add or update SVG files in `./svg`
2. Run `npm run build` to generate components
3. Icons will be optimized and converted to framework-specific components

See [CONTRIBUTING.md](./CONTRIBUTING.md) for more details.

## License

MIT © Qlik
