import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const response = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error code: ${errorCode}, error message: ${errorMessage}`);
        });
    return response;
};

export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const response = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(`Error code: ${errorCode}, error message: ${errorMessage}`);
        });

    return response;
};

export const sighnOutUser = async () => {
    const auth = getAuth();

    const response = await auth.signOut();

    return response;
}

export const changeStateAuth = () => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;

            console.log(uid);
        } else {

        }
    });
};

