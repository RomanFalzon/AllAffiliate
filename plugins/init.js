import { usePostStore } from '@/stores/postStore' 
export default defineNuxtPlugin(async (nuxtApp) => {
    const postStore = usePostStore();
    const {data} = await useFetch('/api/posts');
    postStore.setPosts(data.value.data, 'init.js Plugins')
})