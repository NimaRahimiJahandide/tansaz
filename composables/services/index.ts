import { useStore } from '~/store'

export const useServices = () => {

    // state

    const store = useStore()

    // computed

    const token = computed(() => store.getToken)
    const refreshToken = computed(() => store.getRefreshToken)
    const isLoggedIn = computed(() => store.getToken != '')

    // methods

    const setToken = (token: string) => {
        store.setToken(token)
    }

    const setRefreshToken = (refreshToken: string) => {
        store.setRefreshToken(refreshToken)
    }

    return {
        isLoggedIn,
        token,
        setToken,
        refreshToken,
        setRefreshToken
    }

}