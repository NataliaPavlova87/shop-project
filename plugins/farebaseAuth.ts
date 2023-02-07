import { initializeApp } from "firebase/app";
import {initUser} from "~/composables/useFirebase";

export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();

    const firebaseConfig = {
        apiKey: config.app.authKey,
    };

    const app = initializeApp(firebaseConfig);

    initUser();
})
