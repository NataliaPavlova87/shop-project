export default defineNuxtPlugin(() => {
    addRouteMiddleware('auth', () => {
        const { $auth } = useNuxtApp();

        if (!$auth.currentUser) {
            abortNavigation()
            return navigateTo('/')
        }
    })
})
