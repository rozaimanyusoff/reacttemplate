import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
    ],
<<<<<<< HEAD
    //base: '/reacttemplate',
=======
    //base: process.env.NODE_ENV === 'production' ? '/reacttemplate/' : '/',
>>>>>>> 67773e781de8e6f825be2448078d66bfeb6f9d5a
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    server: {
        proxy: {
            '/api': {
                target: 'https://j8.ranhilltechnologies.com.my',
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    }
});
