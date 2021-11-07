import { useEffect, useState } from "react";
import firebaseApp from "./firebase.config";
import {
    getAuth,
    updateProfile,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut, signInWithEmailAndPassword,
} from "firebase/auth";
/**
 * Firebase App calling ;
 * auth;
 * googleProvider;
 */
firebaseApp();
const auth = getAuth();

/**
 * useFirebase
 * 😯 Hook 😯
 */

function useFirebase() {
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    /**
     * Update User
     */
    function updateUserData(name, redirectHistory) {
        updateProfile(auth.currentUser, { displayName: name })
            .then((res) => {
                setUser(res.user);
                setError('');
                redirectHistory();
            })
            .catch((err) => setError(err.code));
    }
    /**
     * Signup
     */
    function handleSignUp({ name, email, password }, redirectHistory) {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(() => updateUserData(name, redirectHistory))
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }
    /**
     * SignIn
     */
    function handleSignIn({ email, password }, redirectHistory) {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((res) => { setUser(res.user); setError('') })
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }
    /**
     * Sign out
     */
    function handleSignOut() {
        setLoading(true)
        // setFirebase({ loading: true, ...firebase });
        signOut(auth)
            .then(() => setUser({}))
            .catch((err) => setError(err.code))
            .finally(() => setLoading(false));
    }
    /**
     * Reset password
     */
    function handleResetPassword(email) {
        sendPasswordResetEmail(auth, email)
            .then(() => { })
            .catch((err) => setError(err.code));
    }
    /**
     * Auth state change
     */
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            user ?
                setUser(user)
                : setUser({});
            setLoading(false)
        });
    }, []);
    return {
        firebase: {
            user, loading, error
        },
        handleSignUp,
        handleSignIn,
        handleResetPassword,
        handleSignOut,
    };
}
export default useFirebase;
