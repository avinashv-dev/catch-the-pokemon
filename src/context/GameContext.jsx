import { createContext, useState, useContext } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
    const [caughtPokemon, setCaughtPokemon] = useState([]);
    const [pokemon, setPokemon] = useState(null);
    const [win, setWin] = useState(false);

    const addCaughtPokemon = (newPokemon) => {
        if (!newPokemon || !newPokemon.sprites) return; 
        setCaughtPokemon((prev) => {
            const updatedList = [...prev, newPokemon];
            if (updatedList.length >= 5) setWin(true);
            return updatedList;
        });
    };

    const resetGame = () => {
        setCaughtPokemon([]);
        setWin(false);
    };

    return (
        <GameContext.Provider value={{ caughtPokemon, pokemon, setPokemon, addCaughtPokemon, resetGame, win }}>
            {children}
        </GameContext.Provider>
    );
};

export const useGame = () => useContext(GameContext);
