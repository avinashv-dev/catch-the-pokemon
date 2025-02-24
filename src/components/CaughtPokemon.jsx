import { useEffect, useState } from "react";
import { useGame } from "../context/GameContext";

const CaughtPokemon = () => {
    const { caughtPokemon } = useGame();
    const [newlyAdded, setNewlyAdded] = useState({});

    useEffect(() => {
        // Set the animation flag for the latest caught Pokemon
        if (caughtPokemon.length > 0) {
            setNewlyAdded((prev) => ({
                ...prev,
                [caughtPokemon.length - 1]: true,
            }));

            // Remove the animation flag
            setTimeout(() => {
                setNewlyAdded((prev) => ({
                    ...prev,
                    [caughtPokemon.length - 1]: false,
                }));
            }, 200); // Animation duration
        }
    }, [caughtPokemon]);

    return (
        <div className="mt-4 flex flex-wrap flex-col justify-center items-center gap-1 lg:gap-3 pb-7 sm:px-2 lg:px-4 pt-2 bg-yellow-100 rounded-lg shadow-md shadow-black">
            <div className="text-gray-700 text-lg font-medium">
                Caught Pokémon
                <span className="text-md font-extralight ml-1">({caughtPokemon.length})</span>
            </div>
            <div className="flex flex-wrap gap-4">
                {caughtPokemon.length === 0 ? (
                    <p className="text-gray-400">No Pokémon caught yet.</p>
                ) : (
                    caughtPokemon.map((p, index) =>
                        p && p.sprites ? (
                            <div key={index} className={`size-18 lg:size-20 lg:p-1 mx-1 mb-2 shadow-md shadow-gray-400 rounded-2xl bg-white transition-all ease-in-out duration-500
                                ${newlyAdded[index] ? "scale-100 opacity-90" : "scale-100 opacity-90"}`}
                            >
                                <img src={p.sprites.front_shiny} alt={p.name} className="w-full h-full" />
                                <p className="text-center text-sm font-extralight my-2 text-neutral-700">{p.name}</p>
                            </div>
                        ) : null
                    )
                )}
            </div>
        </div>
    );
};

export default CaughtPokemon;