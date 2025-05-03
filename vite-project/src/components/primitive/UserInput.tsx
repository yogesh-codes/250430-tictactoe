import { useId } from "react";

type UserInputPropType = {
    labelValue: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

function UserInput({ labelValue, ...rest }: UserInputPropType) {
    const id = useId();

    return (
        <div className="bg-neutral flex flex-col justify-center items-center min-w-fit px-1 h-20 mb-1">
            <label htmlFor={id}>{labelValue}</label>
            <input id={id} type="text" {...rest} className="h-8" />
        </div>
    );
}

export { UserInput, type UserInputPropType };
