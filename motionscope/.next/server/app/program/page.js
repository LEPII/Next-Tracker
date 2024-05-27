const CHUNK_PUBLIC_PATH = "server/app/program/page.js";
const runtime = require("../../chunks/ssr/[turbopack]_runtime.js");
runtime.loadChunk("server/chunks/ssr/node_modules_dee18a._.js");
runtime.loadChunk("server/chunks/ssr/[root of the server]__bb3b86._.js");
runtime.getOrInstantiateRuntimeModule("[project]/.next-internal/server/app/program/page/actions.js [app-rsc] (ecmascript)", CHUNK_PUBLIC_PATH);
module.exports = runtime.getOrInstantiateRuntimeModule("[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/program/page { COMPONENT_0 => \"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_1 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", COMPONENT_2 => \"[project]/src/app/program/page.js [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <facade>", CHUNK_PUBLIC_PATH).exports;
