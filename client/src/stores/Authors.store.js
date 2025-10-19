import axios from 'axios';
import { create } from 'zustand';

const useAuthorStore = create((set) => ({
    areAuthorsLoaded: false,
    isAuthorLoaded: false,
    authors: [],
    author: {},
    loadAuthors: () => {

        try {

            axios.get("https://finsweet-backend.vercel.app/api/users").then(data => {
                set({ authors: data.data });
                set({ areAuthorsLoaded: true });
                console.log("get users request success");
            });

        } catch (error) {
            console.log(error);
            set({ areAuthorsLoaded: false });
        }

    },

    loadOneAuthor: (id) => {
        try {

            axios.get(`https://finsweet-backend.vercel.app/api/users/${id}`).then(data => {
                set({ author: data.data });
                set({ isAuthorLoaded: true });
                console.log(`getting author of id: ${id} successful`);
            });

        } catch (error) {
            console.log(error);
            set({ isAuthorLoaded: false });
        }

    },
}));

export default useAuthorStore;