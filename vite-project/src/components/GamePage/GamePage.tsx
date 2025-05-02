//Components
import Header from "../Header/Header";
import { GameBox } from "../GameBox/GameBox";

function GamePage() {
    return (
        <div className="flex flex-col min-h-dvh items-center w-full bg-green-200">
            <Header />
            <h1>Game Page</h1>
            <div className=" flex flex-col justify-center ">
                <div className="w-80 h-8 bg-blue-200"></div>
                <GameBox />
            </div>
        </div>
    );
}

export default GamePage;
