The Netlify deploy errored, with the following guidance provided:

**Error type:** esbuild transform/syntax error.

**Cause:** The build fails while transforming `src/pages/member/request-new.tsx`. According to [line 60](#L60) and [lines 64-65](#L64-L65), the very first line of that file is not valid TypeScript/JSX — it literally reads `The Netlify deploy errored, with the following guidance provided:`. esbuild expects a `;` but instead finds the word `Netlify`.

In other words, `src/pages/member/request-new.tsx` doesn't contain source code at all — it appears to contain prose/error text that was accidentally saved into the file (or committed as a placeholder). esbuild cannot parse this as a module.

**Solution:**

1. Open [`src/pages/member/request-new.tsx`](https://github.com/lindabell001/afcn-website/blob/main/src/pages/member/request-new.tsx) and inspect its contents. You'll find it starts with plain text rather than valid TSX.
2. Replace the file contents with valid React/TypeScript code. For example, a minimal valid component:

```tsx
import React from "react";

export default function RequestNew() {
  return <div>Request New</div>;
}
```

3. Commit the corrected file and redeploy.

If this file was never meant to exist (e.g. it was an accidental commit), simply delete it and remove any imports that reference it, then push the change.

The relevant error logs are:

Line 45: ────────────────────────────────────────────────────────────────
Line 46: ​
Line 47: $ npm run build
Line 48: > vite_react_shadcn_ts@0.0.0 build
Line 49: > vite build
Line 50: vite v5.4.19 building for production...
Line 51: transforming...
Line 52: Browserslist: browsers data (caniuse-lite) is 13 months old. Please run:
Line 53:   npx update-browserslist-db@latest
Line 54:   Why you should do it regularly: https://github.com/browserslist/update-db#readme
Line 55: Failed during stage 'building site': Build script returned non-zero exit code: 2
Line 56: ✓ 30 modules transformed.
Line 57: x Build failed in 1.27s
Line 58: error during build:
Line 59: [vite:esbuild] Transform failed with 1 error:
Line 60: /opt/build/repo/src/pages/member/request-new.tsx:1:4: ERROR: Expected ";" but found "Netlify"
Line 61: file: /opt/build/repo/src/pages/member/request-new.tsx:1:4
Line 62: 
Line 63: Expected ";" but found "Netlify"
Line 64: 1  |  The Netlify deploy errored, with the following guidance provided:
Line 65:    |      ^
Line 66: 2  |
Line 67: 3  |  **Error type:** esbuild transform/syntax error.
Line 68: 
Line 69:     at failureErrorWithLog (/opt/build/repo/node_modules/esbuild/lib/main.js:1472:15)
Line 70:     at /opt/build/repo/node_modules/esbuild/lib/main.js:755:50
Line 71:     at responseCallbacks.<computed> (/opt/build/repo/node_modules/esbuild/lib/main.js:622:9)
Line 72:     at handleIncomingPacket (/opt/build/repo/node_modules/esbuild/lib/main.js:677:12)
Line 73:     at Socket.readFromStdout (/opt/build/repo/node_modules/esbuild/lib/main.js:600:7)
Line 74:     at Socket.emit (node:events:519:28)
Line 75:     at addChunk (node:internal/streams/readable:561:12)
Line 76:     at readableAddChunkPushByteMode (node:internal/streams/readable:512:3)
Line 77:     at Readable.push (node:internal/streams/readable:392:5)
Line 78:     at Pipe.onStreamRead (node:internal/stream_base_commons:189:23)
Line 79: ​
Line 80: "build.command" failed                                        
Line 81: ────────────────────────────────────────────────────────────────
Line 82: ​
Line 83:   Error message
Line 84:   Command failed with exit code 1: npm run build
Line 85: ​
Line 86:   Error location
Line 87:   In build.command from netlify.toml:
Line 88:   npm run build
Line 89: ​
Line 90:   Resolved config
Line 91:   build:
Line 92:     command: npm run build
Line 93:     commandOrigin: config
Line 94:     environment:
Line 95:       - SUPABASE_ANON_KEY
Line 96:       - SUPABASE_DATABASE_URL
Line 108:         Cache-Control: public, max-age=0, must-revalidate
Line 109:   headersOrigin: config
Line 110:   redirects:
Line 111:     - from: /test-supabase.html
Line 112:       status: 200
Line 113:       to: /test-supabase.html
Line 114:     - from: /*
Line 115:       status: 200
Line 116:       to: /index.html
Line 117:   redirectsOrigin: config
Line 118: Build failed due to a user error: Build script returned non-zero exit code: 2
Line 119: Failing build: Failed to build site
Line 120: Finished processing build request in 10.496s
