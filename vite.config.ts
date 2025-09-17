// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dtsPlugin from "vite-plugin-dts";

export default defineConfig({
    plugins: [
        react(),
        dtsPlugin({
            include: ['src/**/*.ts','src/**/*.tsx'],
            // rollupTypes: true,
            tsconfigPath: './tsconfig.app.json',
            copyDtsFiles: true,
            outDir: 'dist/types',
        })
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: path.resolve(process.cwd(), 'src/index.ts'), // Entry point for your library
            name: 'json-view', // Global variable name for your library
            fileName: (format) => `index.${format}.js`, // Output file name
        },
        sourcemap: true,
        minify: false,
        rollupOptions: {
            // Externalize dependencies that should not be bundled with your library
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
    server: {
        port: 8080,
        open: true,
    },
});
