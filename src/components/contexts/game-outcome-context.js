import { createContext, useState } from "react";

//actual value to access
export const GameOutcomeContext = createContext(
    {
        gameOutcome: null,
        setGameOutcome: () => null,
    }
);

//a provider wrapper to render the child components
export const GameOutcomeProvider = ({children}) => {
    const [gameOutcome, setGameOutcome] = useState(null);
    const value = {gameOutcome, setGameOutcome};

    return <GameOutcomeContext.Provider value={value}>
            {children}
        </GameOutcomeContext.Provider>
}