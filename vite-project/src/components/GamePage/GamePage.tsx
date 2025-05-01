//Components
import Header from "../Header/Header";
import { GameBox } from "../GameBox/GameBox";

function GamePage() {
    return (
        <div className="flex flex-col items-center w-full bg-green-200">
            <Header />
            <h1>Game Page</h1>
            <GameBox />
        </div>
    );
}

export default GamePage;
