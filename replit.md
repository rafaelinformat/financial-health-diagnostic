# Overview

This project is a financial health diagnosis and treatment platform designed to help businesses assess their financial condition and receive personalized recommendations. The application provides comprehensive financial analysis through diagnostic tools, detailed reporting, and treatment plans to improve business financial health.

The platform appears to serve Brazilian companies in various industrial sectors (such as "TECNO CHAPA" and "TECNO MONTAGENS") and offers multi-language support in Portuguese. It features a complete workflow from financial data upload to detailed diagnostic reports and treatment recommendations.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript and Vite for development
- **UI Library**: Radix UI components with shadcn/ui component system
- **Styling**: Tailwind CSS with CSS variables for theming and responsive design
- **Routing**: React Router for client-side navigation with protected routes
- **State Management**: TanStack React Query for server state management
- **Forms**: React Hook Form with Zod validation
- **Notifications**: Sonner for toast notifications and custom toaster components

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Architecture Pattern**: RESTful API with route-based organization

## Database Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Database**: PostgreSQL (configured for Neon Database)
- **Schema**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations and schema management
- **Validation**: Zod schemas integrated with Drizzle for type safety

## Data Storage Design
- **Development**: In-memory storage implementation for rapid prototyping
- **Production**: PostgreSQL with connection pooling via Neon serverless
- **Schema Structure**: User management system with extensible design for financial data
- **Type Safety**: Full TypeScript integration from database to frontend

## Authentication & Authorization
- **Session Management**: Planned integration with connect-pg-simple for PostgreSQL session storage
- **User System**: Basic user model with username/password authentication
- **Route Protection**: Client-side route guards for authenticated areas

## Application Structure
- **Monorepo Design**: Shared types and schemas between client and server
- **Component Organization**: Feature-based component structure with reusable UI components
- **Page Architecture**: Dashboard layout with nested routing for different financial modules
- **State Management**: Query-based state with optimistic updates

## Key Features
- **Financial Diagnosis**: Multi-step diagnostic process with file upload and analysis
- **Treatment Planning**: Personalized financial treatment recommendations
- **Historical Tracking**: Comprehensive history of diagnostics and treatments per company
- **Reporting**: Detailed financial health reports with various metrics and indicators
- **Multi-Company Support**: Support for multiple companies with separate diagnostic histories

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL hosting with connection pooling
- **Drizzle ORM**: Database ORM with PostgreSQL adapter

## UI and Design
- **Radix UI**: Comprehensive component library for accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework with custom design system
- **Lucide React**: Icon library for consistent iconography
- **shadcn/ui**: Pre-built component system based on Radix UI

## Development Tools
- **Vite**: Frontend build tool with HMR and development server
- **TypeScript**: Type system for both frontend and backend
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Plugins**: Development environment integration for Replit platform

## Utility Libraries
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form management with validation
- **Zod**: Schema validation library
- **date-fns**: Date manipulation utilities
- **clsx/tailwind-merge**: Conditional CSS class utilities
- **nanoid**: Unique ID generation