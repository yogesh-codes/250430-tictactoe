// src/gameUtils.ts

type Mark = "x" | "o" | "none";

type WinnerResult = {
    winningMark: Exclude<Mark, "none">;
    winningIndices: [number, number, number];
} | null;

const checkWinner = (squareMarks: Mark[]): WinnerResult => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // cols
        [0, 4, 8],
        [2, 4, 6], // diags
    ];
    for (const line of lines) {
        const [a, b, c] = line;
        if (
            squareMarks[a] !== "none" &&
            squareMarks[a] === squareMarks[b] &&
            squareMarks[a] === squareMarks[c]
        ) {
            return { winningMark: squareMarks[a], winningIndices: [a, b, c] };
        }
    }
    return null;
};

export { checkWinner, type Mark };
