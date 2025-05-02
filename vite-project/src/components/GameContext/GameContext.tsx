import {
    useContext,
    createContext,
    ReactNode,
    useState,
    SetStateAction,
    Dispatch,
} from "react";
import { PlayerBoxPropsType } from "../PlayerBox/PlayerBox";

type GameStatusType =
    | "restarted"
    | "inProgress"
    | "completedWin"
    | "completedDraw";
type WinnerPlayerType = PlayerBoxPropsType | null;
type WinningIndicesType = [number, number, number] | null;

type GameContextType = {
    resetSignal: boolean;
    setResetSignal: Dispatch<SetStateAction<boolean>>;
    playerX: PlayerBoxPropsType;
    setPlayerX: Dispatch<SetStateAction<PlayerBoxPropsType>>;
    playerO: PlayerBoxPropsType;
    setPlayerO: Dispatch<SetStateAction<PlayerBoxPropsType>>;
    currentPlayer: PlayerBoxPropsType;
    setCurrentPlayer: Dispatch<SetStateAction<PlayerBoxPropsType>>;
    gameStatus: GameStatusType;
    setGameStatus: Dispatch<SetStateAction<GameStatusType>>;
    winnerPlayer: WinnerPlayerType;
    setWinnerPlayer: Dispatch<SetStateAction<WinnerPlayerType>>;
    winningIndices: WinningIndicesType;
    setWinningIndices: Dispatch<SetStateAction<WinningIndicesType>>;
};

const GameContext = createContext<GameContextType | undefined>(undefined);

function useGameContext() {
    const ctx = useContext(GameContext);

    if (!ctx) {
        throw new Error("useGameContext must be used within a GameProvider");
    }
    return ctx;
}

function GameProvider({ children }: { children: ReactNode }) {
    const [resetSignal, setResetSignal] = useState(false);
    const [playerX, setPlayerX] = useState<PlayerBoxPropsType>({
        playerName: "Player 1",
        mark: "x",
        score: 0,
    });
    const [playerO, setPlayerO] = useState<PlayerBoxPropsType>({
        playerName: "Player 2",
        mark: "o",
        score: 0,
    });

    const [currentPlayer, setCurrentPlayer] =
        useState<PlayerBoxPropsType>(playerX);

    const [gameStatus, setGameStatus] = useState<GameStatusType>("restarted");

    const [winnerPlayer, setWinnerPlayer] = useState<WinnerPlayerType>(null);

    const [winningIndices, setWinningIndices] =
        useState<WinningIndicesType>(null);

    return (
        <GameContext.Provider
            value={{
                resetSignal,
                setResetSignal,
                playerX,
                setPlayerX,
                playerO,
                setPlayerO,
                currentPlayer,
                setCurrentPlayer,
                gameStatus,
                setGameStatus,
                winnerPlayer,
                setWinnerPlayer,
                winningIndices,
                setWinningIndices,
            }}
        >
            {children}
        </GameContext.Provider>
    );
}

export { useGameContext, GameProvider };
