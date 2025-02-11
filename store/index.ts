import { defineStore } from "pinia";
import { useStorage, type RemovableRef } from "@vueuse/core";

import type { StoreType } from "~/types/store";

export const useStore = defineStore("store", {
    state: () =>
        ({
            token: useStorage("token", "", sessionStorage),
            refreshToken: useStorage("refresh-token", "", sessionStorage),
        } as StoreType),

    getters: {
        // /**
        //  *
        //  * @param { StoreType } state
        //  * @returns { string }
        //  */
        getToken: (state: StoreType): RemovableRef<string> => state.token,
        // /**
        //  *
        //  * @param { StoreType } state
        //  * @returns { string }
        //  */
        getRefreshToken: (state: StoreType): RemovableRef<string> =>
            state.refreshToken,
    },

    actions: {
        // /**
        //  *
        //  * @param { string } payload
        //  * @returns { void }
        //  */
        setToken(token: string) {
            this.token = token;
        },
        // /**
        //  *
        //  * @param { string } payload
        //  * @returns { void }
        //  */
        setRefreshToken(refreshToken: string) {
            this.refreshToken = refreshToken;
        },
    },
});
