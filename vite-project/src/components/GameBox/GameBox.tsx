//Components
import { Board } from "../Board/Board";

import { PlayerBox } from "../PlayerBox/PlayerBox";
import { toast } from "react-toastify";
//import { PlayerPropType } from "../../scripts/player";
import { useGameContext } from "../GameContext/GameContext";
import { ReactElement } from "react";

function GameBox() {
    const gameContext = useGameContext();

    const handleRestartButtonOnClick = () => {
        gameContext.setGameStatus("restarted");
        toast("You clicked reset button");
    };

    let displayMessage: ReactElement | null = null;
    switch (gameContext.gameStatus) {
        case "inProgress": {
            displayMessage = (
                <div>
                    <h3 className="text-center">
                        {gameContext.currentPlayer.playerName}'s Turn
                    </h3>
                    <h4 className="text-center">
                        Mark {gameContext.currentPlayer.mark}
                    </h4>
                </div>
            );
            break;
        }

        case "restarted": {
            displayMessage = (
                <div>
                    <h3 className="text-center">Game Started</h3>
                </div>
            );
            break;
        }
        case "completedWin": {
            displayMessage = (
                <div>
                    <h3 className="text-center">Game Complete</h3>
                    <h4 className="text-center">
                        {gameContext.winnerPlayer?.playerName} has Won!
                    </h4>
                </div>
            );
            break;
        }
        case "completedDraw": {
            displayMessage = (
                <div>
                    <h3 className="text-center">Game Draw</h3>
                </div>
            );
            break;
        }
    }

    return (
        <div className=" bg-red-400">
            {displayMessage}

            <div className="grid">
                <div className="row-start-1 sm:row-start-1 col-start-1 sm:col-start-1 col-span-1 sm:col-span-2">
                    <Board />
                </div>

                <div className="row-start-2 sm:row-start-2 col-span-1 sm:col-span-1">
                    <PlayerBox {...gameContext.playerX} />
                </div>

                <div className="row-start-3 sm:row-start-2 col-span-1 sm:col-span-1">
                    <PlayerBox {...gameContext.playerO} />
                </div>
            </div>
            <div>
                <button onClick={handleRestartButtonOnClick}>Restart</button>
            </div>
        </div>
    );
}

export { GameBox };
