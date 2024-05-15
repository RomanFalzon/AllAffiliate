import { defineStore } from 'pinia'

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        //Default mobile
        device: 'mobile',

        // For new layouts, create x-page-newLayout. Then in the layouts add x-page-newLayout-mobile/x-page-newLayout-desktop
        homeSkinLayout: 'pages-home-default',
        aboutSkinLayout: 'pages-about-default',
        contactSkinLayout: 'pages-contact-default',

        burgerMenuLocation: 'top-right',
        menuType: 'sidebar-left',
    }),
    getters: {
        // Pages layout getters based on device
        getHomeSkinLayout(state) {
            return state.device === 'mobile'
                ? state.homeSkinLayout + '-mobile'
                : state.homeSkinLayout + '-desktop'
        },
        getAboutSkinLayout(state) {
            return state.device === 'mobile'
                ? state.aboutSkinLayout + '-mobile'
                : state.aboutSkinLayout + '-desktop'
        },
        getContactSkinLayout(state) {
            return state.device === 'mobile'
                ? state.contactSkinLayout + '-mobile'
                : state.contactSkinLayout + '-desktop'
        },
    },
    actions: {
        setDevice(device) {
            this.device = device
        },
    },
})
