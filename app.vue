<template>
    <div class="container">
        <NuxtPage />
    </div>
</template>

<script>
import { useSiteStore } from './stores/siteStore'
export default {
    setup() {
        console.log(isDesktopDevice())
        useSiteStore().setDevice(isDesktopDevice())
    },
}
</script>
