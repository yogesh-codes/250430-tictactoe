import { useGameContext } from "../../../context/GameContext/GameContext";

//Components
import { Board } from "../../Board/Board";
import { PlayerBox } from "../../PlayerBox/PlayerBox";

function GameGrid() {
    const gameContext = useGameContext();

    return (
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
    );
}

export { GameGrid };
