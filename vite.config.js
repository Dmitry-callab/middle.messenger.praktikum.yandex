import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import handlebars from './src/vitePlugins/vite-plugin-handlebars-precompile'

const rootPath = fileURLToPath(new URL('src', import.meta.url));
const buildPath = fileURLToPath(new URL('build', import.meta.url));

export default defineConfig({
    root: rootPath,
    build: {
        outDir: buildPath,
    },
    plugins: [handlebars()]
})
