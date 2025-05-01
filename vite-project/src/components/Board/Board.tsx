import { useState } from "react";

//Components
import { Square, SquarePropsType } from "./Square/Square";
import { PlayerBoxPropsType } from "../PlayerBox/PlayerBox";

type BoardProps = {
    playerX: PlayerBoxPropsType;
    playerO: PlayerBoxPropsType;
};

function Board({ playerX, playerO }: BoardProps) {
    let items: SquarePropsType[] = [];
    for (let i = 0; i < 9; i++) {
        items.push({
            id: i.toString(),
            key: i.toString(),
            state: "none",
            onClick: null,
        });
    }
    const [squareArray, setSquareArray] = useState<SquarePropsType[]>(items);

    const [currentPlayer, setCurrentPlayer] =
        useState<PlayerBoxPropsType>(playerX);

    const handleOnClick = (idx: string) => {
        const id: number = parseInt(idx);
        const square = squareArray[id];

        if (square.state == "none") {
            //toast
            return;
        } else {
            const updatedSquare = squareArray.slice();
            updatedSquare[id].state = currentPlayer?.mark;
        }
    };

    let SquareComponents = [];
    for (let i = 0; i < 9; i++) {
        SquareComponents.push(
            <Square
                id={i.toString()}
                key={i.toString()}
                state="none"
                onClick={null}
            />
        );
    }

    return (
        <div className="m-2 grid grid-cols-3 w-40 gap-1 aspect-square bg-amber-800 place-items-center">
            {SquareComponents}
        </div>
    );
}

export { Board };
