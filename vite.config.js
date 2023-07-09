import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy'
import handlebars from './src/vitePlugins/vite-plugin-handlebars-precompile'

const rootPath = fileURLToPath(new URL('src', import.meta.url));
const buildPath = fileURLToPath(new URL('build', import.meta.url));


const spritePathFrom = fileURLToPath(new URL('src/assets/icons/sprite.svg', import.meta.url));
const spritePathTo = fileURLToPath(new URL('build/assets/icons', import.meta.url));

export default defineConfig({
    root: rootPath,
    build: {
        outDir: buildPath,
    },
    plugins: [
        handlebars(),
        viteStaticCopy({
            targets: [
                {
                    src: spritePathFrom,
                    dest: spritePathTo
                }
            ]
        })
    ]
})
