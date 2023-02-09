import { initializeApp } from "firebase/app";
import {initUser} from "~/composables/useFirebase";
import { getAuth } from 'firebase/auth';

export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.app.authKey,
    };

    const app = initializeApp(firebaseConfig);

    initUser();

    const auth = getAuth();

    nuxtApp.vueApp.provide('auth', auth);
    nuxtApp.provide('auth', auth);
})
