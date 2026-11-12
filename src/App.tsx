The Netlify deploy errored, with the following guidance provided:

The build is failing due to an unresolved import.

**Error type:** Module resolution error (Rollup).

[Line 69](#L69) shows the cause: Rollup could not resolve the import `"./pages/senator/[slug]"` from `src/App.tsx` ([line 70](#L70)).

This happens because the file `src/pages/senator/[slug]` does not exist at the path/name being imported. Common causes:

- The file was not committed to the repo, or is in `.gitignore`.
- A filename case mismatch (Netlify's Linux build is case-sensitive, unlike macOS/Windows), e.g. the file is `Senator` but imported as `senator`.
- A missing or incorrect file extension. Unlike some file-based routers, Vite/Rollup needs a real module path. The literal `[slug]` filename is unusual for a Vite project — this is a Next.js-style dynamic route convention that Vite does not support natively.

**Solution:**

1. First verify the file was actually committed to the repo and exists at `src/pages/senator/`. Check the exact filename and casing in your [repo](https://github.com/lindabell001/afcn-website/tree/main/src/pages).

2. Ensure the import path in [`src/App.tsx`](https://github.com/lindabell001/afcn-website/blob/main/src/App.tsx) matches the actual filename exactly, including case and extension. For example:

```tsx
import SenatorPage from "./pages/senator/[slug]";
```

must correspond to a real file like `src/pages/senator/[slug].tsx`.

3. Since this looks like a Next.js-style dynamic route (`[slug]`) but you are using Vite + React Router, rename the file to a standard component name and implement the dynamic route with React Router params instead. For example, rename to `src/pages/senator/SenatorDetail.tsx` and define a route like:

```tsx
<Route path="/senator/:slug" element={<SenatorDetail />} />
```

then read the param with `useParams()`.

Fix the import/filename (and commit the file), then redeploy.

The relevant error logs are:

Line 55: ────────────────────────────────────────────────────────────────
Line 56: ​
Line 57: $ npm run build
Line 58: > vite_react_shadcn_ts@0.0.0 build
Line 59: > vite build
Line 60: vite v5.4.19 building for production...
Line 61: transforming...
Line 62: Browserslist: browsers data (caniuse-lite) is 17 months old. Please run:
Line 63:   npx update-browserslist-db@latest
Line 64:   Why you should do it regularly: https://github.com/browserslist/update-db#readme
Line 65: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 66: ✓ 5 modules transformed.
Line 67: x Build failed in 941ms
Line 68: error during build:
Line 69: Could not resolve "./pages/senator/[slug]" from "src/App.tsx"
Line 70: file: /opt/build/repo/src/App.tsx
Line 71:     at getRollupError (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:395:41)
Line 72:     at error (file:///opt/build/repo/node_modules/rollup/dist/es/shared/parseAst.js:391:42)
Line 73:     at ModuleLoader.handleInvalidResolvedId (file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:20006:24)
Line 74:     at file:///opt/build/repo/node_modules/rollup/dist/es/shared/node-entry.js:19966:26
Line 75: ​
Line 76: "build.command" failed                                        
Line 77: ────────────────────────────────────────────────────────────────
Line 78: ​
Line 79:   Error message
Line 80:   Command failed with exit code 1: npm run build
Line 81: ​
Line 82:   Error location
Line 83:   In build.command from netlify.toml:
Line 84:   npm run build
Line 85: ​
Line 86:   Resolved config
Line 87:   build:
Line 88:     command: npm run build
Line 89:     commandOrigin: config
Line 90:     environment:
Line 91:       - SUPABASE_ANON_KEY
Line 92:       - SUPABASE_DATABASE_URL
Line 123:       status: 301
Line 124:       to: https://americafirstcitizensnetwork.org/:splat
Line 125:     - force: true
Line 126:       from: http://www.afcnus.org/*
Line 127:       status: 301
Line 128:       to: https://americafirstcitizensnetwork.org/:splat
Line 129:     - from: /*
Line 130:       status: 200
Line 131:       to: /index.html
Line 132:   redirectsOrigin: config
Line 133: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 134: Failing build: Failed to build site
Line 135: Finished processing build request in 14.123s
