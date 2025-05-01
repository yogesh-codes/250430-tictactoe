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
        <div className="aspect-square">
            <div className="flex items-center justify-between ">
                <PlayerBox {...gameContext.playerX} />
                <Board />
                <PlayerBox {...gameContext.playerO} />
            </div>
            <div>
                <button onClick={handleRestartButtonOnClick}>Restart</button>
            </div>
        </div>
    );
}

export { GameBox };
