mbti-statistics

Pure Next.js + TypeScript + Tailwind project.

Tech stack:

* Next.js 14 (Pages Router)
* React 18
* Tailwind CSS 3
* TypeScript 5

Project structure (key folders):

* `src/pages` – Next.js pages (routing)
* `src/components` – Reusable UI components
* `src/data` – Static data & type definitions
* `src/styles/globals.css` – Global Tailwind entry

Removed legacy Vite artifacts (main.tsx, App.tsx, index.css, vite-env.d.ts, extra tsconfig.*) to simplify maintenance.

Development (Windows PowerShell):

```powershell
cd d:\git\mbti-statistics
npm install
npm run dev
```

Build & start production:

```powershell
npm run build
npm start
```

Lint:

```powershell
npm run lint
```

Environment variables: create `.env.local` and prefix custom vars with `NEXT_PUBLIC_` if needed on client side.

TypeScript config consolidated into single `tsconfig.json` with strict checks enabled.

Feel free to open issues or extend pages/components.
