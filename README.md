# Obliq Frontend

<p align="left">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/shadcn/ui-Components-000000?style=for-the-badge&logo=shadcnui&logoColor=white" alt="shadcn/ui" />
  <img src="https://img.shields.io/badge/Zod-Validation-3E67B1?style=for-the-badge&logo=zod&logoColor=white" alt="Zod" />
</p>

Dynamic, permission-driven RBAC web client for the Obliq platform.

## Overview

Obliq uses dynamic permissions, not hard-coded role pages.

- A page is accessible only if the user has the required permission atom.
- Menus and actions are rendered from effective permissions at runtime.
- Role label provides context, but authorization is permission-first.

This frontend is built with Next.js App Router + TypeScript and is designed to enforce RBAC behavior end-to-end at the UI level.

## Why Obliq

Traditional systems lock features by role and require code changes for access updates.

Obliq allows Admin/Manager users to configure access from UI while enforcing the grant ceiling rule:

- Users cannot grant permissions they do not have.
- Access can be granted/revoked without redeploying frontend logic.
- Sensitive management activity is intended to be reflected through backend audit logs.

## Roles

| Role | Primary Responsibility |
| --- | --- |
| Admin | Full platform control, permission governance, global visibility |
| Manager | Team-level management, scoped user and permission control |
| Agent | Work inside modules enabled by Manager/Admin |
| Customer | Self-service portal access with strict boundaries |

## Technology Stack

### Core Technologies

| Layer | Technology | Purpose |
| --- | --- | --- |
| Framework | Next.js (App Router) | Routing, SSR, middleware-based authorization gates |
| UI Library | React 19 | Component-driven UI |
| Language | TypeScript | Type-safe app logic and contracts |
| Styling | Tailwind CSS 4 | Utility-first responsive styling |
| Component System | shadcn/ui + Radix | Accessible, composable UI primitives |
| Validation | Zod | Form and payload validation |
| Motion | Framer Motion | UI transitions and interactive feedback |
| API Layer | Native fetch wrapper | Centralized request/response handling |

### Visual Tech Logos

<p>
  <img src="https://cdn.simpleicons.org/nextdotjs/000000" alt="Next.js" height="28" />
  <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" height="28" />
  <img src="https://cdn.simpleicons.org/typescript/3178C6" alt="TypeScript" height="28" />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" height="28" />
  <img src="https://cdn.simpleicons.org/zod/3E67B1" alt="Zod" height="28" />
  <img src="https://cdn.simpleicons.org/framer/0055FF" alt="Framer Motion" height="28" />
</p>

## RBAC Design Principles

- One protected route maps to one required permission atom.
- Middleware should block access before protected page render.
- UI must hide or disable actions without required permissions.
- Manager grants are capped by Manager's own effective permissions.
- Customers remain isolated unless explicit permission allows otherwise.

## Frontend Scope

- Auth flows: login, forgot password, reset password, OTP verification.
- Permission-aware route gating (middleware-driven).
- Dynamic sidebar/menu built from permission set.
- Module surfaces: dashboard, users, leads, tasks, reports, audit, settings.

## Project Structure

```text
obilq-client/
├── app/
│   ├── (auth)/
│   │   ├── forgot-password/page.tsx
│   │   ├── login/page.tsx
│   │   ├── register/page.tsx
│   │   ├── reset-password/page.tsx
│   │   ├── verify-email/page.tsx
│   │   └── verify-otp/page.tsx
│   ├── error.tsx
│   ├── layout.tsx
│   └── not-found.tsx
├── components/
│   ├── Pages/Auth/
│   ├── Shared/
│   └── ui/
├── interface/
├── lib/
├── services/
├── utils/
└── validation/
```

## Environment

Create .env.local in root:

```env
NEXT_PUBLIC_BASE_API_URL=http://localhost:5000/api/v1
```

This variable is used by services/api.ts.

## Quick Start

1. Install dependencies.

```bash
npm install
```

2. Start development server.

```bash
npm run dev
```

3. Open app.

http://localhost:3000

## NPM Scripts

- npm run dev: start dev server (experimental HTTPS).
- npm run build: create production build.
- npm run start: run production build.
- npm run lint: lint the codebase.

## Auth and Session Strategy

- Access and refresh tokens are handled through httpOnly cookies.
- No localStorage token storage.
- Refresh flow is integrated via auth/refresh in services/auth.service.ts.
- Logout clears cookies and attempts backend session invalidation.

## API Contract Expectation

Expected response envelope from backend services:

```json
{
  "success": true,
  "message": "...",
  "data": {},
  "meta": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  }
}
```

## Example Permission Atoms

- dashboard.view
- users.read
- users.create
- users.update
- users.suspend
- users.ban
- leads.read
- tasks.manage
- reports.view
- audit.read
- settings.manage

Final atom catalog should come from backend permission master.

## Delivery Standards

- Figma-first implementation for screens and states.
- Unauthorized users see proper 403 behavior.
- Both page-level and action-level checks are enforced.
- UX avoids dead-end actions by hiding/disabling unauthorized controls.

## Security & Enforcement

- Server-Side Validation: All restrictions enforced at the API level.
- Authentication: Secure JWT-based authentication system.
- Authorization: Role-based access control (Admin/User).
- File Validation: File type and size validation before upload.
- Quota Checking: Real-time quota validation on every operation.

## UI/UX Highlights

- Responsive Design: Fully responsive across all devices.
- Modern Interface: Clean, intuitive design using shadcn/ui components.
- Real-Time Feedback: Instant validation messages and error handling.
- Loading States: Smooth loading indicators and skeleton screens.
- Toast Notifications: User-friendly feedback for all actions.

## License

This project is licensed under the MIT License.

## Author

Built with love using Next.js, TypeScript, and shadcn/ui.
