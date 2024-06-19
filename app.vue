<template>
    <div class="container">
        <NuxtPage />
    </div>
</template>

<script setup>
const { isMobile } = useDevice();
useSiteStore().setDevice(isMobile);
</script>
