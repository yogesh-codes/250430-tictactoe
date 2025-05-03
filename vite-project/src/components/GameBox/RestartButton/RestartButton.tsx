import { useGameContext } from "../../../context/GameContext/GameContext";
import { toast } from "react-toastify";

function RestartButton() {
    const gameContext = useGameContext();

    const handleRestartButtonOnClick = () => {
        gameContext.setGameStatus("restarted");
        toast("You clicked reset button");
    };

    return (
        <div>
            <button onClick={handleRestartButtonOnClick}>Restart</button>
        </div>
    );
}

export { RestartButton };
