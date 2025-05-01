// // vite.config.ts
// import { defineConfig, loadEnv, type ConfigEnv } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig(({ mode }: ConfigEnv) => {
//     // 1) Load all VITE_* vars for this mode
//     const env = loadEnv(mode, process.cwd(), "VITE_"); // :contentReference[oaicite:1]{index=1}
//     process.env = { ...process.env, ...env }; // :contentReference[oaicite:5]{index=5}

//     return {
//         // 2) Prefix all assets with "/<repo>/"
//         base: `/${env.VITE_GH_REPO}/`, // :contentReference[oaicite:2]{index=2}
//         plugins: [react(), tailwindcss()],
//     };
// });

// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    base: "/",
    plugins: [react(), tailwindcss()],
});
