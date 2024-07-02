import { resolve } from 'path';

export default defineNuxtConfig({
    devtools: { enabled: true },
    modules: ['@pinia/nuxt', '@nuxtjs/device'],
    ssr: true,
    css: ['@/scss/main.scss'],
    alias: {
        '@': resolve(__dirname, './'),
    },
});
