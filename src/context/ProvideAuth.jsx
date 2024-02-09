"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import {auth} from "../lib/firebase-client-config";



const AuthContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged((auth), (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser();
            }
        });

        // Limpiar el observador cuando el componente se desmonta
        return () => unsubscribe();
    }, []);

    // Función para cerrar la sesión del usuario
    const signout = async () => {
        try {
            await signOut(getAuth(auth));
            // Se actualiza el estado del usuario a null cuando cierra sesión
            setUser(null);
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return { user, signout };
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default ProvideAuth;
