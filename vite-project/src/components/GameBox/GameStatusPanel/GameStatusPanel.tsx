import { ReactElement } from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";

function GameStatusPanel() {
    const { gameStatus, currentPlayer, winnerPlayer } = useGameContext();

    let panelMessage: ReactElement | null = null;

    console.log("came here");
    switch (gameStatus) {
        case "inProgress": {
            panelMessage = (
                <div>
                    <h3 className="text-center">
                        {currentPlayer.playerName}'s Turn
                    </h3>
                    <h4 className="text-center">Mark {currentPlayer.mark}</h4>
                </div>
            );
            break;
        }

        case "restarted": {
            panelMessage = (
                <div>
                    <h3 className="text-center">Game Started</h3>
                </div>
            );
            break;
        }
        case "completedWin": {
            panelMessage = (
                <div>
                    <h3 className="text-center">Game Complete</h3>
                    <h4 className="text-center">
                        {winnerPlayer?.playerName} has Won!
                    </h4>
                </div>
            );
            break;
        }
        case "completedDraw": {
            panelMessage = (
                <div>
                    <h3 className="text-center">Game Draw</h3>
                </div>
            );
            break;
        }
    }

    return panelMessage;
}

export { GameStatusPanel };
