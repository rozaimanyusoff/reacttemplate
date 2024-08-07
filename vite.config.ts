import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
    //base: '/reacttemplate/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    build: {
        rollupOptions: {
            output: {
                entryFileNames: 'reacttemplate/assets/[name].[hash].js',
                chunkFileNames: 'reacttemplate/assets/[name].[hash].js',
                assetFileNames: 'reacttemplate/assets/[name].[hash].[ext]',
            },
        },
    },
});
