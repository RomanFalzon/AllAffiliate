<template>
    <div class="">
        <NuxtLayout :name="getHomeSkinLayout"></NuxtLayout>
    </div>
</template>

<script>
import { useSiteStore } from '../stores/siteStore';
import { mapState } from 'pinia';
export default {
    computed: {
        ...mapState(useSiteStore, ['getHomeSkinLayout']),
    },
};
</script>
