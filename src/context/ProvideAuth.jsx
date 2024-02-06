import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';



const AuthContext = createContext();

export function ProvideAuth({ children }) {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

function useProvideAuth() {
    const [user, setUser] = useState(null);
    
    // Utiliza useEffect para evitar efectos secundarios en el renderizado
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (firebaseUser) => {
            if (firebaseUser) {
                setUser(firebaseUser);
            } else {
                setUser(null);
            }
        });

        // Limpiar el observador cuando el componente se desmonta
        return () => unsubscribe();
    }, []);

    // Función para cerrar la sesión del usuario
    const signout = () => {
        return signOut(getAuth()).then(() => {
            // Se actualiza el estado del usuario a null cuando cierra sesión
            setUser(null);
        }).catch((error) => {
            console.error("Error signing out:", error);
        });
    };

    return { user, signout };
}

export const useAuth = () => {
    return useContext(AuthContext);
};

export default ProvideAuth;
