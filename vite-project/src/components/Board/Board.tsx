import { useState, ReactElement } from "react";

//Components
import { Square, SquarePropsType } from "./Square/Square";

//Prop Type
// type BoardProps = {
//     playerX: PlayerBoxPropsType;
//     playerO: PlayerBoxPropsType;
// };

//GameContext
import { useGameContext } from "../GameContext/GameContext";
import { toast } from "react-toastify";

function Board() {
    // let items: SquarePropsType[] = [];
    // for (let i = 0; i < 9; i++) {
    //     items.push({
    //         id: i.toString(),
    //         key: i.toString(),
    //         state: "none",
    //         onClick: null,
    //     });
    // }
    // const [squareArray, setSquareArray] = useState<SquarePropsType[]>(items);

    const gameContext = useGameContext();

    // const handleOnClickSquare = (idx: string) => {
    //     const id: number = parseInt(idx);
    //     const square = squareArray[id];

    //     if (square.state !== "none") {
    //         toast("Square is already set.")
    //         return;
    //     } else {

    //         const updatedSquare = squareArray.slice();
    //         updatedSquare[id].state = gameContext.currentPlayer.mark;
    //     }
    // };

    let SquareComponents: ReactElement<SquarePropsType>[] = [];
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
