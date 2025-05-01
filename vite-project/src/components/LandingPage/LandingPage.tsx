import { toast } from "react-toastify";
import Header from "../Header/Header";
import { useGameContext } from "../GameContext/GameContext";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function LandingPage() {
    const { playerX, playerO, setPlayerX, setPlayerO } = useGameContext();

    useEffect(() => {
        if (playerX.playerName)
            // ignore initial mount if you like
            console.log("Name changed to:", playerX.playerName);
        // e.g. validateName(name), toast(name), fetchSuggestions(name)…
    }, [playerX.playerName]);

    return (
        <div>
            <Header />
            <h1>Tic Tac Toe</h1>
            <div>
                <label htmlFor="player1Name">Player 1 Name</label>
                <input
                    type="text"
                    id="player1Name"
                    value={playerX.playerName}
                    onChange={(e) => {
                        setPlayerX({ ...playerX, playerName: e.target.value });
                    }}
                />
                <label htmlFor="player2Name">Player 2 Name</label>
                <input
                    type="text"
                    id="player2Name"
                    value={playerO.playerName}
                    onChange={(e) => {
                        setPlayerO({ ...playerO, playerName: e.target.value });
                    }}
                />
            </div>
            <div>
                <Link to="/game">
                    <button>Let's Play</button>
                </Link>
            </div>
        </div>
    );
}

export default LandingPage;
