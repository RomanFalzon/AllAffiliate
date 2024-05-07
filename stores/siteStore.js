import { defineStore } from 'pinia'

export const useSiteStore = defineStore('siteStore', {
    state: () => ({
        homeSkinLayout: 'mobile-default',
    }),
    getters: {
        getHomeSkinLayout(state) {
            return state.homeSkinLayout
        },
    },
})
