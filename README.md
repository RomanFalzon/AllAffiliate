# Nuxt 3 Pages as Layouts Concept and Get to Know

## This is a general practice and get to know Nuxt 3. None of this is to be used for commercial use. This is only for learning.

## General Description

This repository serves as a testing playground where we experiment with using pages as entire layouts, rather than passing pages via slots to the layout.

The approach involves using a page to render a layout by its name. The page itself acts as a placeholder, loading the necessary layout which then loads the structure of the imported components. For example:

1. Nav
2. Header
3. Post Slider
4. Comments
5. Footer

### Pros:
- **Easily Configurable Structure:** Each component is reactive for both mobile and desktop, making them 'hot swappable' across any desired layout.
- **Store-Oriented Layouts:** Layouts can be set and extracted based on user needs, loading specific components as required as the store mutates.

### Cons:
- **Placeholder Pages:** Pages used in this manner do not rely on their own content and act merely as placeholders. Custom pages would be needed for specific types of content. Passing content via slots would not make sense in this context.
- **Verbose Practices:** Each page may require importing general components such as nav, header, footer, etc., leading to some verbosity.

### TODO: ( Apart from the general WIP )
- Implement generic, reusable components for elements like navigation to reduce redundancy. Avoid possible nested layouts for readability and simplicity.

### Rationale:
Using static pages with set content and layouts for simple elements like navigation is insufficient for a dynamic, content-driven site where the structure changes frequently. Therefore, having different layouts for a single page is more practical. This allows us to create multiple unique websites with one codebase.

**Example Use Case:**
A homepage could have various layouts such as:
- Default Layout
- Mobile Layout
- Role-Specific Layout
- Custom Layout

Each layout would have imported components such as:
- Default Layout:
    - Header
    - Banner Default Slider
    - Trending Pages
    - Footer
OR
- Default New Layout:
    - Banner New With Header
    - Trending Pages New
    - Recent Comments
    - Footer FAQ

This approach provides greater flexibility and adaptability for changing site structures.

## General Installation

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
