# App Blueprint

Personal Next.js starting point: Tailwind design tokens, reusable UI primitives, Prisma + MySQL, Auth.js credentials auth with time-bounded multi-role support, and Hostinger SMTP email.

### New Project Setup Checklist

#### 1. Create the Project

- Copy the project folder.
- Rename the project in `package.json`.
- Update `NEXTAUTH_URL`.

#### 2. Install Dependencies

npm install

#### 3. Configure Environment

- Copy `.env.example` to `.env`.
- Create a **new** MySQL database and update `DATABASE_URL`.
- Generate a **new** `NEXTAUTH_SECRET` (never reuse):

  ```bash
  openssl rand -base64 32
  ```

- Configure Hostinger SMTP credentials (if using email (hPanel -> Emails -> Configure Email Client)).
- Set `AUTH_ENABLED=true` or `false` as needed. (if this app doesn't need login at all.)

#### 3A. Check for DB connection Environment

Once you're deployed (or even running npm run dev locally), hit /api/health in the browser — it'll return:

json
{
"status": "ok",
"database": "connected",
"responseTimeMs": 12,
"timestamp": "..."
}

or a 503 with "database": "unreachable" if the connection to your Hostinger MySQL isn't working — deliberately without leaking the connection string or raw error in the response, since this endpoint is public by default.

#### 4. Initialize the Database

- Replace the example domain model (`ExampleItem`) in `prisma/schema.prisma` with your application's models.
- Initialize the database:

  ```bash
  npx prisma migrate dev
  ```

  _(or `npm run prisma:migrate` if your project defines that script)._

#### 5. Customize the App

- Update the design tokens in `app/globals.css` for your branding.

#### 6. Deploy

- Add all required environment variables (`DATABASE_URL`, `NEXTAUTH_URL`, `NEXTAUTH_SECRET`, SMTP settings, etc.) to your deployment platform (Netlify/Vercel/Hostinger).
- **Never commit your `.env` file.**

This version reduces the original list from 18 items to **6 clear setup phases** while preserving all unique steps.

## Roles

Roles live in `UserRole`, not on `User` directly — see `prisma/schema.prisma`. A person can hold multiple role stints (coach, player, parent — any combination) each with their own `active` flag and `startDate`/`endDate`, so history is preserved even after a role ends and can be re-assigned later.

- `getCurrentRoles(userId)` — roles active right now (`lib/auth-guard.ts`)
- `getUpcomingRoles(userId)` — roles assigned but not yet started
- `requireActiveRole(type)` — gate a server action/route behind a specific active role

Always re-check roles from the DB for sensitive actions — the session's `roleSnapshot` is a cheap cache for UI only.

## Stack

- Next.js App Router + TypeScript
- Tailwind, themed via CSS variables in `app/globals.css`
- Prisma + MySQL
- Auth.js v5 (Credentials provider + Prisma adapter)
- Nodemailer via Hostinger SMTP
- react-hook-form + zod for forms
