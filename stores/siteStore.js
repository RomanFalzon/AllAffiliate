import { defineStore } from 'pinia';

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        //Default mobile
        isMobile: true,

        // For new layouts, create x-page-newLayout. Then in the layouts add x-page-newLayout-mobile/x-page-newLayout-desktop
        homeSkinLayout: 'pages-home-default',
        aboutSkinLayout: 'pages-about-default',
        contactSkinLayout: 'pages-contact-default',

        burgerMenuLocation: 'top-right',
        menuType: 'sidebar-left',
    }),
    getters: {},
    actions: {
        setDevice(device) {
            this.device = device;
        },
    },
});
