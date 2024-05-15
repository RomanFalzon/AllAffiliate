<template>
    <div class="">
        <NuxtLayout :name="siteStore.getHomeSkinLayout"></NuxtLayout>
    </div>
</template>

<script>
import { useSiteStore } from '../stores/siteStore'
export default {
    setup() {
        const siteStore = useSiteStore()
        return { siteStore }
    },
    created() {},
}
</script>
