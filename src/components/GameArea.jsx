import Pokemon from "./Pokemon";
import CaughtPokemon from "./CaughtPokemon";
import WinMessage from "./WinMessage";
import bgImage from "../assets/pokemon-background.jpg";

const GameArea = () => {
    return (
        <div
            className="relative w-full h-screen bg-cover bg-center flex flex-col items-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-mono font-black mb-4 mt-25  lg:mt-5 animate-pulse transition-all">Catch the Pokémon</h1>
            <Pokemon />
            <CaughtPokemon />
            <WinMessage />
        </div>
    );
};

export default GameArea;
