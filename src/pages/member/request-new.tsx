The Netlify deploy errored, with the following guidance provided:

The build fails during the esbuild transform stage.

**Error type:** Syntax/transform error (esbuild).

**Cause:** [Line 60](#L60) shows the failure in `src/pages/member/request-new.tsx`, and [lines 64-67](#L64-L67) reveal that this `.tsx` file actually contains raw HTML (`<!DOCTYPE html>`, `<html lang="en">`, `<head>`) rather than valid TypeScript/JSX. esbuild expects an identifier at the top of a `.tsx` module but finds `<!`, so it aborts.

**Solution:**

The file [`src/pages/member/request-new.tsx`](https://github.com/lindabell001/afcn-website/blob/main/src/pages/member/request-new.tsx) was created with HTML content instead of a React component. You have two options:

1. **If this was meant to be an HTML page**, rename it so it isn't processed by esbuild as a module. Move it to the `public/` directory and give it an `.html` extension (e.g. `public/request-new.html`). Files in `public/` are served as-is.

2. **If this was meant to be a React page/route**, replace the HTML with a valid React component, for example:

```tsx
export default function RequestNew() {
  return (
    <div>
      {/* your page content */}
    </div>
  );
}
```

Then convert the HTML markup (from `<body>`) into JSX inside the returned element (remember JSX uses `className` instead of `class`, self-closing tags, etc.).

The unrelated Browserslist notice on [lines 52-53](#L52-L53) is only a warning and does not cause the failure.

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
Line 56: ✓ 12 modules transformed.
Line 57: x Build failed in 1.09s
Line 58: error during build:
Line 59: [vite:esbuild] Transform failed with 1 error:
Line 60: /opt/build/repo/src/pages/member/request-new.tsx:1:1: ERROR: Expected identifier but found "!"
Line 61: file: /opt/build/repo/src/pages/member/request-new.tsx:1:1
Line 62: 
Line 63: Expected identifier but found "!"
Line 64: 1  |  <!DOCTYPE html>
Line 65:    |   ^
Line 66: 2  |  <html lang="en">
Line 67: 3  |  <head>
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
Line 120: Finished processing build request in 10.913s
