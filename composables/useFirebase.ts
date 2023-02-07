import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {ERROR_AUTH_MESSAGE} from '@/constants/errorAuthMessage';
import {Ref} from 'vue';
import {User} from '@/interfaces/user';

const getErrorText = (error: string) => {
    switch (error) {
    case 'auth/invalid-email':
        return ERROR_AUTH_MESSAGE.EMAIL;
    case 'auth/weak-password':
        return ERROR_AUTH_MESSAGE.PASSWORD_LENGTH;
    case 'auth/user-not-found':
        return ERROR_AUTH_MESSAGE.USER;
    case 'auth/wrong-password':
        return ERROR_AUTH_MESSAGE.PASSWORD_WRONG;
    case 'auth/too-many-requests':
        return ERROR_AUTH_MESSAGE.MANY_REQUESTS;
    default:
        return '';
    }
}

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const error = ref('');

    const response = await createUserWithEmailAndPassword(auth, email, password)
        .catch((e) => {
            error.value = getErrorText(e.code);
        });

    return {
        response,
        error,
    };
};

export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const error = ref('');
    const response = await signInWithEmailAndPassword(auth, email, password)
        .catch((e) => {
            error.value = getErrorText(e.code);
        });

    return {
        response,
        error,
    };
};

export const sighnOutUser = async () => {
    const auth = getAuth();

    const response = await auth.signOut();

    return response;
}

export const initUser = () => {
    const auth = getAuth();
    const globalUser: Ref<User | null> = useGlobalUser();
    const isGlobalUserAuth = useIsGlobalUserAuth();
    globalUser.value = auth.currentUser;
    isGlobalUserAuth.value = !!auth.currentUser?.uid;
    onAuthStateChanged(auth, (user) => {
        globalUser.value = user;
        isGlobalUserAuth.value = !!user?.uid;
    });
};

