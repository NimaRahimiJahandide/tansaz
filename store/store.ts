import type { RemovableRef } from "@vueuse/core";

type StoreType = {
    token: RemovableRef<string>;
    refreshToken: RemovableRef<string>;
};

export type { StoreType };
