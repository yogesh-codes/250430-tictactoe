import Header from "../../components/Header/Header";
import { useGameContext } from "../../context/GameContext/GameContext";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//Components
import { UserInput } from "../../components/primitive/UserInput";

function LandingPage() {
    const { playerX, playerO, setPlayerX, setPlayerO } = useGameContext();

    useEffect(() => {
        if (playerX.playerName)
            console.log("Player X is now changed to:", playerX.playerName);
        if (playerO.playerName)
            console.log("Player O is now changed to:", playerX.playerName);
    }, [playerX.playerName, playerO.playerName]);

    return (
        <div className="flex flex-col min-h-dvh items-center">
            <Header />

            <h1 className="mb-12">Tic Tac Toe</h1>
            <div className="flex flex-col justify-evenly items-center gap-1">
                <UserInput
                    labelValue="Player 1 Name"
                    type="text"
                    id="player1Name"
                    value={playerX.playerName}
                    onChange={(e) => {
                        setPlayerX({ ...playerX, playerName: e.target.value });
                    }}
                />

                <UserInput
                    labelValue="Player 2 Name"
                    type="text"
                    id="player2Name"
                    value={playerO.playerName}
                    onChange={(e) => {
                        setPlayerO({ ...playerO, playerName: e.target.value });
                    }}
                />

                {/* <label htmlFor="player1Name">Player 1 Name</label> */}
                {/* <input
                    type="text"
                    id="player1Name"
                    value={playerX.playerName}
                    onChange={(e) => {
                        setPlayerX({ ...playerX, playerName: e.target.value });
                    }}
                /> */}
            </div>
            <div>
                <Link to="/game">Let's Play</Link>
            </div>
        </div>
    );
}

export default LandingPage;
