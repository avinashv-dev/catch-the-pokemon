import { useGame } from "../context/GameContext";
import bgImage from "../assets/pokemon-background.jpg";

const WinMessage = () => {
    const { win, resetGame } = useGame();

    return (
        win && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-50"
                    style={{ backgroundImage: `url(${bgImage})` }}
                ></div>

                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-4 z-10 animate-bounce text-center">
                    <span className="text-white sm:text-7xl md:text-8xl lg:text-9xl">Y</span>
                    <span className="text-pink-500 sm:text-5xl md:text-6xl lg:text-7xl">o</span>
                    <span className="text-yellow-300 sm:text-6xl md:text-7xl lg:text-8xl">u</span>
                    <span className="text-pink-300 sm:text-6xl md:text-7xl lg:text-8xl ml-5">W</span>
                    <span className="text-yellow-300 sm:text-7xl md:text-8xl lg:text-9xl">i</span>
                    <span className="text-white sm:text-6xl md:text-7xl lg:text-8xl">n</span>
                    <span className="text-emerald-500 sm:text-7xl md:text-8xl lg:text-9xl">!</span>
                </h1>

                <button
                    onClick={resetGame}
                    className="mt-6 px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl font-bold bg-red-500 text-white rounded-full hover:scale-105
                            transition-all duration-300 ease-in-out z-10 hover:bg-white hover:text-red-500 shadow-lg">
                    Restart
                </button>
            </div>
        )
    );
};

export default WinMessage;
