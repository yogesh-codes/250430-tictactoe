/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GH_USER: string;
    readonly VITE_GH_REPO: string;
    // add any other VITE_… vars here
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
