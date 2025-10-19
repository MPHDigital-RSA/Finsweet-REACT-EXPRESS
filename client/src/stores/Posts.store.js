import axios from 'axios';
import { create } from 'zustand';

const usePostStore = create((set) => ({
    arePostsLoaded: false,
    isPostLoaded: false,
    posts: [],
    post: {},

    loadAllPosts: () => {
        try {

            axios.get("https://finsweet-backend.vercel.app/api/posts").then(data => {
                set({ posts: data.data });
                set({ arePostsLoaded: true });
                console.log("get posts request success");
            });

        } catch (error) {
            console.log(error);
            set({ arePostsLoaded: false });
        }
    },

    loadOnePost: (id) => {
        try {

            axios.get(`https://finsweet-backend.vercel.app/api/posts/${id}`).then(data => {
                set({ post: data.data });
                set({ isPostLoaded: true });
                console.log(`getting post of id: ${id} successful`);
            });

        } catch (error) {
            console.log(error);
            set({ isPostLoaded: false });
        }

    }

}));

export default usePostStore;