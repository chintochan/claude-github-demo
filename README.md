# NoMarkup - Car Dealer Markup Transparency Platform

NoMarkup is a transparency platform that helps car buyers report dealer markups and find honest dealers with no-markup guarantees. Think of it as Yelp meets TrueCar for dealer pricing transparency.

## Features

### Current MVP Features
- 🏠 **Homepage** with hero section, search, and features
- 🔍 **Search Interface** - Find dealers by make, model, and location
- 🎨 **Modern UI** - Built with Shadcn/ui components and Tailwind CSS
- 📊 **Database Schema** - Complete data models for dealers, reports, and reviews
- 🗺️ **Map Integration Ready** - Prepared for Google Maps integration
- ✅ **Verified Dealer System** - Badge system for dealers with no-markup guarantees

### Planned Features
- User authentication and profiles
- Markup report submission with photo uploads
- Interactive map view
- Dealer detail pages with reviews and ratings
- Review system
- Admin dashboard for report verification
- Email notifications
- Search filters and sorting

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Shadcn/ui
- **Database**: PostgreSQL (via Supabase)
- **ORM**: Prisma
- **Maps**: Google Maps API
- **Storage**: Supabase (for image uploads)

## Project Structure

```
nomarkup/
├── app/                      # Next.js app router
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   ├── home/                # Homepage components
│   │   ├── hero-section.tsx
│   │   ├── search-section.tsx
│   │   └── features-section.tsx
│   ├── layout/              # Layout components
│   │   ├── header.tsx
│   │   └── footer.tsx
│   └── ui/                  # Shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── badge.tsx
├── lib/
│   ├── prisma.ts            # Prisma client
│   └── utils.ts             # Utility functions
├── prisma/
│   └── schema.prisma        # Database schema
├── types/
│   └── index.ts             # TypeScript type definitions
└── .env.example             # Environment variables template
```

## Database Schema

### Dealer
- Basic information (name, address, location coordinates)
- Verification status and badge
- Computed fields (average markup, total reports)

### MarkupReport
- Vehicle details (make, model, year, trim)
- Pricing information (MSRP, dealer price, markup)
- Reporter information (optional anonymous reporting)
- Photo uploads support
- Verification status

### Review
- Rating (1-5 stars)
- Review content and title
- Purchase information
- Reviewer details
- Verification status

### User
- Basic authentication data
- Role-based access (USER, ADMIN, DEALER)

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- PostgreSQL database (or Supabase account)
- Google Maps API key (for map features)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nomarkup
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` and add your credentials:
   - `DATABASE_URL`: PostgreSQL connection string
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Google Maps API key
   - `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key

4. **Set up the database**
   ```bash
   # Generate Prisma client
   npx prisma generate

   # Push schema to database
   npx prisma db push

   # (Optional) Seed the database
   npx prisma db seed
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Prisma Commands

- `npx prisma studio` - Open Prisma Studio (database GUI)
- `npx prisma generate` - Generate Prisma Client
- `npx prisma db push` - Push schema changes to database
- `npx prisma migrate dev` - Create a new migration
- `npx prisma migrate deploy` - Deploy migrations to production

## Environment Variables

See `.env.example` for all required environment variables:

- **Database**: PostgreSQL connection string
- **Authentication**: NextAuth configuration (future)
- **Google Maps**: API key for map features
- **Supabase**: URL and anonymous key for storage
- **App Config**: Base URL for the application

## Next Steps

### Phase 1: Core Features (Current)
- ✅ Project setup and structure
- ✅ Database schema design
- ✅ Homepage with search
- ✅ UI component library

### Phase 2: User Features
- [ ] User authentication (NextAuth)
- [ ] Markup report submission form
- [ ] Photo upload functionality
- [ ] Search results page
- [ ] Dealer detail pages

### Phase 3: Dealer Features
- [ ] Dealer registration and verification
- [ ] Dealer dashboard
- [ ] Payment integration (Stripe)
- [ ] Verified badge management

### Phase 4: Advanced Features
- [ ] Interactive map view
- [ ] Advanced search filters
- [ ] Review system
- [ ] Admin dashboard
- [ ] Email notifications
- [ ] Analytics and reporting

## Contributing

This is currently a private project. If you'd like to contribute, please contact the project maintainer.

## License

All rights reserved.

## Support

For questions or support, please open an issue on GitHub or contact the development team.
