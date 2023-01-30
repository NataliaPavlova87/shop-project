import { initializeApp } from "firebase/app";

export default defineNuxtPlugin((nuxtApp) => {
    // const { AUTH_KEY } = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: 'AIzaSyBa-FA533l40LocOQf2Ob4ntXbn12Ix_FI',
    };

    initializeApp(firebaseConfig);
})
