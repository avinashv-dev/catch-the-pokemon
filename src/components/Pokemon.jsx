import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";

const Pokemon = () => {
    const { pokemon, setPokemon, addCaughtPokemon, win } = useGame();
    const [position, setPosition] = useState({ top: "50%", left: "50%" });
    const [isCatching, setIsCatching] = useState(false); // Track animation

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    const fetchRandomPokemon = async () => {
        const id = Math.floor(Math.random() * 151) + 1; // Get a random Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);

        setPosition({
            top: `${Math.random() * 70 + 10}%`,
            left: `${Math.random() * 70 + 10}%`,
        });

        setIsCatching(false); // Reset animation
    };

    const catchPokemon = () => {
        setIsCatching(true); // Start fade-out animation
        setTimeout(() => {
            if (pokemon) {
                addCaughtPokemon(pokemon); // Add Pokemon to caught list
            }
            fetchRandomPokemon(); // Load new Pokemon after animation ends
        }, 500); // Set duration of animation 
    };

    return (
        <div>
            {!win && pokemon && (
                <div
                    className={`absolute rounded-full cursor-grabbing transition-all duration-500 ease-out z-10
                        ${isCatching ? "opacity-0 rotate-180 scale-75" : "hover:scale-150 hover:rotate-12"}
                    `}
                    style={{ top: position.top, left: position.left, width: "80px", height: "80px" }}
                    onClick={catchPokemon}
                >
                    <img
                        src={pokemon.sprites.front_shiny}
                        alt={pokemon.name}
                        className="w-full h-full object-contain" />
                </div>
            )}
        </div>
    );
};

export default Pokemon;
