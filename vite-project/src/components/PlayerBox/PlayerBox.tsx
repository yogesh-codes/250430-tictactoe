type PlayerBoxPropsType = {
    playerName: string;
    mark: "x" | "o";
    score: number;
};

function PlayerBox({ playerName, mark, score }: PlayerBoxPropsType) {
    return (
        <div className="min-w- min-h-8 bg-green-700 mx-2">
            <h3>
                {playerName}-{mark.toUpperCase()}
            </h3>

            <p>Score = {score}</p>
        </div>
    );
}

export { PlayerBox, type PlayerBoxPropsType };
