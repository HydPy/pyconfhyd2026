# PyConf Hyderabad 2026 Website

## Overview

This is the official website for PyConf Hyderabad 2026, the 6th regional Python conference in Hyderabad, India. Built with Next.js, the site provides information about the conference, speakers, schedule, tickets, and community resources.

## Tech Stack

- **Framework**: Next.js 15.5.6 with App Router
- **Language**: TypeScript/JavaScript
- **Styling**: Tailwind CSS 3.4.14
- **Content**: MDX (Markdown with JSX)
- **Icons**: react-icons
- **Deployment**: GitHub Pages via GitHub Actions

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.jsx           # Homepage with hero, speakers, sponsors
│   ├── layout.js          # Root layout with theme provider
│   ├── tickets/           # Ticket purchasing information
│   ├── speakers/          # Speaker profiles and details
│   ├── schedule/          # Conference schedule
│   ├── faq/              # Frequently asked questions
│   ├── code-of-conduct/  # Community guidelines
│   ├── travel/           # Travel and venue information
│   └── our-team/         # Organizer team information
├── components/            # Reusable React components
│   ├── Header.jsx        # Navigation with mobile menu
│   ├── Footer.jsx        # Footer with social links
│   ├── Hero.jsx          # Conference hero banner
│   ├── ThemeContext.jsx  # Dark/light theme provider
│   └── [others]          # Feature-specific components
├── config/
│   └── featureFlags.js   # Feature toggle configuration
└── hooks/
    └── useFeatureFlag.js # Hook for feature flags

data/                      # Configuration and content
├── conference.js         # Conference metadata and links
├── speakers.js           # Speaker information
├── schedule.js           # Event schedule data
├── sponsors.js           # Sponsor listings
└── [others]              # Additional data files

pages-content/            # MDX content files
├── faq.mdx              # FAQ content
├── coc.mdx              # Code of conduct
├── travel.mdx           # Travel guide
└── [others]             # Static page content

public/
├── images/              # Static assets (logos, backgrounds)
└── docs/               # Document files
```

## Key Features

### Feature Flag System

The site uses a comprehensive feature flag system (`src/config/featureFlags.js`) to control visibility of different sections:

- `KEYNOTE_SPEAKERS` - Keynote speaker section
- `SPONSORS` - Sponsor listings
- `TICKETS` - Ticket information
- `SPEAKERS_PAGE` - Speaker profiles page
- `SCHEDULE` - Conference schedule
- `FAQ` - FAQ section
- And more...

### Theme Support

- Dark/light mode toggle with persistent storage
- Custom color scheme with orange/gold primary colors
- Responsive design with mobile-first approach

### Content Management

- MDX files for flexible content authoring
- Centralized data files for easy updates
- Component-driven architecture for reusability

## Development

### Setup

```bash
npm install
npm run dev  # Start development server on localhost:3000
```

### Build & Deploy

```bash
npm run build     # Build static site
```

### Code Quality

```bash
make pre-push     # Run linting and formatting
npm run lint      # ESLint check
npm run format    # Prettier formatting
```

## Configuration

### Conference Information

Update `data/conference.js` with:

- Event dates and venue
- Social media links
- Contact information
- Asset paths

### Navigation

Configure navigation items in `data/navItems.js` with feature flag integration.

### Speakers & Schedule

- Add speakers to `data/speakers.js`
- Configure schedule in `data/schedule.js`
- Update sponsor information in `data/sponsors.js`

### Feature Flags

Enable/disable features in `src/config/featureFlags.js`:

```javascript
export const featureFlags = {
  KEYNOTE_SPEAKERS: true,
  SPONSORS: true,
  TICKETS: false, // Disable during early development
  // ...
};
```

## Deployment

The site is deployed via GitHub Actions to GitHub Pages:

- **URL**: http://2026.pyconfhyd.org
- **Pipeline**: `.github/workflows/nextjs.yml`
- **Build**: Static export with Next.js
- **Custom Domain**: Configured via CNAME

## Content Updates

### Adding Speakers

1. Add speaker data to `data/speakers.js`
2. Include speaker images in `public/images/speakers/`
3. Enable `SPEAKERS_PAGE` feature flag if needed

### Updating Schedule

1. Modify `data/schedule.js` with session information
2. Enable `SCHEDULE` feature flag
3. Test responsive layout on mobile devices

### Managing Sponsors

1. Update `data/sponsors.js` with sponsor tiers
2. Add sponsor logos to `public/images/sponsors/`
3. Enable `SPONSORS` feature flag

## Design System

### Typography

- **Headings**: Bungee font family
- **Body**: Belanosima font family
- **Components**: Typography.jsx for consistent text styling

### Colors

- **Primary**: Orange/gold theme colors
- **Secondary**: Red/crimson accents
- **Background**: Light/dark mode variants
- **Full palette**: Defined in `tailwind.config.js`

### Components

- Responsive design with Tailwind CSS
- Mobile-first approach
- Accessibility considerations with ARIA labels
- Dark mode compatible styling

## SEO & Performance

- **Metadata**: Configured in `data/metadata.ts`
- **Sitemap**: Auto-generated via `app/sitemap.ts`
- **Robots.txt**: Configured in `app/robots.ts`
- **Open Graph**: Social media preview support
- **Performance**: Static site generation for fast loading

## Contributing

1. Fork the repository
2. Create a feature branch
3. Follow the PR template guidelines
4. Run `make pre-push` before committing
5. Ensure responsive design compliance
6. Test accessibility features

## Community

This website serves the Python community in Hyderabad and promotes:

- Knowledge sharing and networking
- Python ecosystem growth
- Inclusive and diverse participation
- Professional development opportunities

For more information about PyConf Hyderabad, visit the conference website or connect with the organizing team through the social media links provided on the site.
