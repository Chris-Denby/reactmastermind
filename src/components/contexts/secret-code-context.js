import { createContext, useState } from "react";

//actual value to access
export const SecretCodeContext = createContext(
    {
        secretCode: null,
        setSecretCode: () => null,
    }
);

//a provider wrapper to render the child components
export const SecretCodeProvider = ({children}) => {
    const [secretCode, setSecretCode] = useState(null);
    const value = {secretCode, setSecretCode};

    return <SecretCodeContext.Provider value={value}>
            {children}
        </SecretCodeContext.Provider>
}