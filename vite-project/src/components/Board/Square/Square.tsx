import { Mark } from "../../../scripts/gameUtils";

type SquarePropsType = {
    id: string;
    mark: Mark;
    handleOnClick: (() => void) | null;
    className: string;
};

function Square({ id, mark, handleOnClick, className }: SquarePropsType) {
    return (
        <button
            id={id}
            key={id}
            className={`${className} text-5xl aspect-square min-w-8 flex justify-center items-center bg-amber-200 hover:bg-amber-100 cursor-pointer `} //{`w-12 h-12 flex justify-center items-center bg-amber-200 hover:bg-amber-100 cursor-pointer`}
            onClick={(_e) => {
                if (handleOnClick) handleOnClick();
            }}
        >
            {mark === "none" ? "" : mark}
        </button>
    );
}

export { Square, type SquarePropsType };
