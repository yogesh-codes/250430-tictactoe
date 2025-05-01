//Components
import { Board } from "../Board/Board";

import { PlayerBox, PlayerBoxPropsType } from "../PlayerBox/PlayerBox";

function GameBox() {
    const playerX: PlayerBoxPropsType = {
        playerName: "Player 1",
        mark: "x",
        score: 0,
    };
    const playerO: PlayerBoxPropsType = {
        playerName: "Player 2",
        mark: "o",
        score: 0,
    };

    const handleRestartButtonOnClick = (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        //Reset the board};
    };

    return (
        <div className="aspect-square">
            <div className="flex items-center justify-between ">
                <PlayerBox {...playerX} />
                <Board playerX={playerX} playerO={playerO} />
                <PlayerBox {...playerO} />
            </div>
            <div>
                <button onClick={handleRestartButtonOnClick}>Restart</button>
            </div>
        </div>
    );
}

export { GameBox };
