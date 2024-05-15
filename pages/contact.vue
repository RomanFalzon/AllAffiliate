<template>
    <div class="">
        <NuxtLayout :name="siteStore.getContactSkinLayout"></NuxtLayout>
    </div>
</template>

<script>
import { useSiteStore } from '../stores/siteStore'
export default {
    setup() {
        const siteStore = useSiteStore()
        return { siteStore }
    },
}
</script>
