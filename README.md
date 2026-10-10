# K&K BOQ Web App

Web application for construction BOQ management.

Features:
- Project management
- Master item library
- Project-specific BOQ items
- Quantity and unit price calculation
- BOQ summary

## Frontend prototype

Built with React, TypeScript, Vite, and Tailwind CSS. The interface is in Thai and formats amounts in Thai baht (THB).

- Dashboard: project count, combined BOQ value, library count, and recent projects.
- Projects: searchable project list, project creation, and project details in the BOQ editor.
- Item Library: search, add, and edit reusable construction items, with duplicate code validation.
- BOQ Editor: switch projects, add multiple library items, create custom project items, change quantities and unit prices, and remove lines.

All data is local mock data held in React state. Refreshing the page resets changes. No authentication, database, Supabase, or external API is connected. Library items are copied into projects; later library edits do not change existing project lines. Custom items remain in their project.

Line totals are quantity multiplied by unit price, rounded to two decimal places. Project totals sum those rounded line totals. Taxes and additional charges are not included.

## Run locally

Use Node.js 22.12+ or Node.js 24 and pnpm 11.

```powershell
pnpm install
pnpm dev
```

Open the local URL printed by Vite, normally http://127.0.0.1:5173. Keep the terminal running; press Ctrl+C to stop the server.

In the Codex environment used to build this prototype, pnpm is bundled but not on PATH. Use:

```powershell
& "$env:USERPROFILE\.cache\codex-runtimes\codex-primary-runtime\dependencies\bin\fallback\pnpm.cmd" dev
```

## Checks

```powershell
pnpm typecheck
pnpm build
pnpm preview
```

The build checks TypeScript and generates the production frontend in `dist/`. Preview serves that build locally, normally at http://127.0.0.1:4173; it does not deploy it.

## Source structure

```text
src/
  App.tsx          Navigation, project creation, and shared React state
  main.tsx         React entry point
  index.css        Tailwind integration and responsive styles
  types.ts         Item, BOQ line, and project types
  data.ts          Mock data and cost formatting/calculations
  components/     Shared dialogs, forms, search, and project table
  pages/          Dashboard, Projects, Library, and BOQ Editor
```
