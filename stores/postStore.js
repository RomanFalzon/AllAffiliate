import { defineStore } from "pinia";

export const usePostStore = defineStore('postStore', {
    state: () => ({
        posts: null,
    }),
    getters: {
        getPosts: (state) => {
            return state.posts
        },
        getHotPosts: (state) => {
            return state.posts.filter(post => post.type == 'hot')
        }
    },
    actions: {
        setPosts(newValue, from) {
            this.posts = newValue;
        },
    }
})