import { useState, ReactElement, useEffect } from "react";

//Components
import { Square, SquarePropsType } from "./Square/Square";

//Prop Type
// type BoardProps = {
//     playerX: PlayerBoxPropsType;
//     playerO: PlayerBoxPropsType;
// };

//GameContext
import { useGameContext } from "../../context/GameContext/GameContext";
import { toast } from "react-toastify";
import { checkWinner, MarkType } from "../../utils/gameUtils";

function Board() {
    const gameContext = useGameContext();

    //build initial squareArray
    let initialSquareArray: SquarePropsType[] = [];
    for (let i = 0; i < 9; i++) {
        initialSquareArray.push({
            id: `square${i}`,
            mark: "none",
            handleOnClick: null,
            className: "",
        });
    }

    //initialise useState
    const [squareArray, setSquareArray] =
        useState<SquarePropsType[]>(initialSquareArray);

    //define handler
    const handleOnClickSquare = (id: number) => {
        //Modify the squareArray

        const current_play_mark = gameContext.currentPlayer.mark;

        const temp_updated = [...squareArray];

        const selected_square = temp_updated[id];

        //check if game inProgress
        if (gameContext.gameStatus !== "inProgress") {
            return;
        }
        //check if already marked
        if (selected_square.mark !== "none") {
            toast("Select unmarked square");
            return;
        }

        temp_updated[id] = {
            ...temp_updated[id],
            mark: current_play_mark,
        };
        console.log({ updatedSquareArray: temp_updated });

        setSquareArray(temp_updated);
        //toast("did i mark?");

        //switch turn
        if (gameContext.currentPlayer === gameContext.playerX) {
            gameContext.setCurrentPlayer(gameContext.playerO);
        } else {
            gameContext.setCurrentPlayer(gameContext.playerX);
        }
    };

    const resetTheBoard = () => {
        let temp_updated = [...squareArray];

        temp_updated = temp_updated.map((item) => {
            return { ...item, mark: "none" };
        });

        setSquareArray(temp_updated);
    };

    useEffect(() => {
        if (gameContext.gameStatus === "restarted") {
            resetTheBoard();
            gameContext.setGameStatus("inProgress");
        }
    }, [gameContext.gameStatus]);

    let SquareComponents: ReactElement<SquarePropsType>[] = [];
    for (let i = 0; i < 9; i++) {
        const item = squareArray[i];
        SquareComponents.push(
            <Square
                id={item.id}
                key={item.id}
                mark={item.mark}
                handleOnClick={() => handleOnClickSquare(i)}
                className={item.className}
            />
        );
    }

    const highlightWinningSquares = (
        winningIndices: [number, number, number]
    ) => {
        SquareComponents = SquareComponents.map((item) => {
            if (parseInt(item.props.id) in winningIndices) {
                return { ...item, className: "active" };
            } else {
                return { ...item };
            }
        });
    };

    //watch for board changes
    useEffect(() => {
        //
        const squareMarks: MarkType[] = squareArray.map((item) => {
            return item.mark;
        });
        const result = checkWinner(squareMarks);
        if (result) {
            const { winningMark, winningIndices } = result;
            // map mark back to the player object
            const winner =
                winningMark === gameContext.playerX.mark
                    ? gameContext.playerX
                    : gameContext.playerO;

            gameContext.setWinnerPlayer(winner);
            gameContext.setGameStatus("completedWin");

            gameContext.setWinningIndices(winningIndices);
            highlightWinningSquares(winningIndices);
        } else if (squareMarks.every((m) => m !== "none")) {
            // all filled, no winner → draw
            gameContext.setGameStatus("completedDraw");
        } else {
            gameContext.setGameStatus("inProgress");
        }
    }, [
        squareArray,
        gameContext.playerX,
        gameContext.playerO,
        gameContext.setGameStatus,
        gameContext.winnerPlayer,
        gameContext.setWinnerPlayer,
        gameContext.winningIndices,
        gameContext.setWinningIndices,
    ]);

    useEffect(() => {
        if (gameContext.gameStatus === "restarted") {
            SquareComponents = SquareComponents.map((item) => {
                return { ...item, mark: "none" };
            });
        }
    }, [gameContext.gameStatus]);

    return (
        <div id="board" className="m-2 grid grid-cols-3 gap-1 aspect-square">
            {SquareComponents}
        </div>
    );
}

export { Board };
