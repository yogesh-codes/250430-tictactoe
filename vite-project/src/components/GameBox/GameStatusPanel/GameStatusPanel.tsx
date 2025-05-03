import { ReactElement, useEffect } from "react";
import { useGameContext } from "../../../context/GameContext/GameContext";

function GameStatusPanel() {
    const gameContext = useGameContext();

    let panelMessage: ReactElement | null = null;
    useEffect(() => {
        console.log("came here");
        switch (gameContext.gameStatus) {
            case "inProgress": {
                panelMessage = (
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
                            {gameContext.winnerPlayer?.playerName} has Won!
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
    }, [gameContext.gameStatus]);

    return panelMessage;
}

export { GameStatusPanel };
