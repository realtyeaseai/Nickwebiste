# Gloria Cleaning Services - Next.js Website

A simple, modern cleaning services website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ✨ Clean, minimal design with Tailwind CSS
- 📱 Fully responsive layout
- 🚀 Fast performance with Next.js App Router
- 💼 Multiple pages: Home, About, Services, Contact
- 🎨 Simple animations and transitions
- 📝 Contact form with validation
- ♿ Accessible components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone or navigate to the project directory:
```bash
cd /Users/vikas/RealtyEase/gloria
```

2. Install dependencies (if not already installed):
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
gloria/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx       # About page
│   │   ├── services/
│   │   │   └── page.tsx       # Services page
│   │   ├── contact/
│   │   │   └── page.tsx       # Contact page
│   │   ├── layout.tsx         # Root layout with Header/Footer
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   └── components/
│       ├── Header.tsx         # Navigation header
│       └── Footer.tsx         # Site footer
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Colors

The site uses a blue color scheme. To change colors, update Tailwind classes in components:
- Primary: `bg-blue-600`, `text-blue-600`
- Hover states: `hover:bg-blue-700`

### Content

1. **Home Page** (`src/app/page.tsx`) - Update hero text, features, and CTA
2. **About Page** (`src/app/about/page.tsx`) - Update company story and values
3. **Services Page** (`src/app/services/page.tsx`) - Modify services array
4. **Contact Page** (`src/app/contact/page.tsx`) - Update contact information
5. **Header** (`src/components/Header.tsx`) - Update company name and navigation
6. **Footer** (`src/components/Footer.tsx`) - Update footer content and links

### Adding Pages

1. Create a new folder in `src/app/` (e.g., `blog/`)
2. Add a `page.tsx` file inside it
3. Export a default React component
4. Update navigation in `Header.tsx`

## Technologies

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **React 19** - UI library
- **ESLint** - Code linting

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, please contact: info@gloria-cleaning.com
