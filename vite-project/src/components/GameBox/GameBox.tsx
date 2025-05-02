//Components
import { Board } from "../Board/Board";

import { PlayerBox, PlayerBoxPropsType } from "../PlayerBox/PlayerBox";
import { toast } from "react-toastify";
//import { PlayerPropType } from "../../scripts/player";
import { useGameContext } from "../GameContext/GameContext";

function GameBox() {
    const handleRestartButtonOnClick = () =>
        //e: React.MouseEvent<HTMLButtonElement, MouseEvent>
        {
            //Reset the board};
            toast("You clicked reset button");
        };

    const gameContext = useGameContext();

    return (
        <div className=" bg-red-400">
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
