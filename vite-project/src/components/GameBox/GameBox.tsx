//Components
import { GameStatusPanel } from "./GameStatusPanel/GameStatusPanel";
import { RestartButton } from "./RestartButton/RestartButton";
import { GameGrid } from "./GameGrid/GameGrid";

function GameBox() {
    return (
        <div className="">
            <GameStatusPanel />

            <GameGrid />

            <RestartButton />
        </div>
    );
}

export { GameBox };
