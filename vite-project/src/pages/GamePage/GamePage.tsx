//Components
import Header from "../../components/Header/Header";
import { GameBox } from "../../components/GameBox/GameBox";

function GamePage() {
    return (
        <div className="bg-bg flex flex-col min-h-dvh items-center w-full">
            <Header>
                <p>Something</p>
            </Header>
            <h1>Game Page</h1>

            <div className="w-70 sm:w-100 md:portrait:w-140">
                <GameBox />
            </div>
        </div>
    );
}

export default GamePage;
