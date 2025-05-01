type SquarePropsType = {
    id: string;
    state: "none" | "x" | "o";
    onClick: (() => void) | null;
};

function Square({ id, state, onClick }: SquarePropsType) {
    return (
        <div
            id={id}
            key={id}
            className={`w-12 h-12 flex justify-center items-center bg-amber-200 hover:bg-amber-100 cursor-pointer`}
            onClick={() => {
                if (onClick) onClick();
            }}
        >
            {state === "none" ? "" : state}
        </div>
    );
}

export { Square, type SquarePropsType };
