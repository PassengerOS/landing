# PassengerOS Project Context & Guidelines

**IMPORTANT: This document is the single source of truth for the PassengerOS project. Always consult it before planning or executing any task to ensure full alignment with the project's architecture, stack, and conventions.**

## 1. High-Level Mission
- **Project:** PassengerOS
- **Goal:** Create a comprehensive platform for ride-share drivers, including a marketing website, a driver-facing application with geofencing, and backend automation services.
- **Core Philosophy:** Aim for a "zero manual coding" flow by leveraging AI, strong automation, and a modular, well-documented architecture. The tone should be that of an expert, collaborative pair programmer.

## 2. Global Technology Stack & Architecture
This project is a monorepo containing multiple applications and services.

- **Web Landing (Marketing):** Next.js 15 (App Router), React Server Components, TailwindCSS, React Three Fiber for 3D hero. Deployed on Vercel.
- **Driver Login & API:** Firebase Auth (Google, Uber


, Apple sign-in), Firestore (realtime DB), Firebase Cloud Functions (serverless API).
- **Driver App (Android-first):** Flutter 3 & Dart, Firebase SDK integration. Will evolve into a custom Android Launcher (Kotlin/Jetpack Compose) in Phase 3.
- **Backend Automation:** Self-hosted n8n and MCP servers running in Docker containers on Hetzner Cloud/Vultr.
- **Linting & Formatting:** ESLint + Prettier are non-negotiable and configured project-wide. Auto-fix on save is enabled.
- **CI/CD:** GitHub Actions for automated deployments to Vercel and Firebase.

## 3. Project Structure Overview
- **/apps/web-landing:** The Next.js marketing site.
- **/apps/driver-app:** The Flutter application.
- **/apps/driver-launcher:** The Phase 3 Android Launcher (Kotlin).
- **/services/firebase:** Firebase Cloud Functions, Firestore rules, and configuration.
- **/services/automation:** Dockerfiles and configuration for n8n and MCP servers.
- **/packages/shared-ui:** (Optional, but recommended) Shared components between apps.
- **/packages/eslint-config-passengeros:** Custom, shared ESLint config.
- **/_ignore/:** Contains utility scripts (PowerShell/Bash) that are NOT part of the application code.

## 4. Key Commands & Scripts
- `npm run dev`: Starts the Next.js web landing dev server.
- `npm run build`: Builds the Next.js app for production.
- `flutter run`: Runs the driver app in a simulator.
- `firebase deploy`: Deploys Firebase functions and rules.
- `docker-compose up -d`: Starts the local automation stack (n8n, MCP).
- `npx eslint . --fix`: Manually runs the linter.

## 5. Coding Style & Conventions
- **Style:** Adhere strictly to the configured ESLint and Prettier rules.
- **Components:** Use React functional components with hooks. Prefer Server Components in Next.js unless client-side interactivity is essential.
- **Commits:** Follow the Conventional Commits specification (e.g., `feat:`, `fix:`, `chore:`). This is critical for automated changelogs.
- **Branching:** Use `feature/TICKET-123-description` for new features. Do not commit directly to `main`.

## 6. The "Do Not Touch" List
- **Never** commit API keys, secrets, or `.env` files. Use `.env.local` which is generated from `passengeros.env` and listed in `.gitignore`.
- **Never** modify the core CI/CD workflows in `.github/workflows/` without discussion and approval.
- **Do not** introduce new major dependencies without first planning it in Architect mode.
