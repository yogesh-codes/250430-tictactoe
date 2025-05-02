import { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Theme =
    | "theme-light"
    | "theme-dark"
    | "theme-ocean"
    | "theme-sunset"
    | "theme-nature";

function ThemeToggler() {
    const availableThemes = [
        "theme-light",
        "theme-dark",
        "theme-ocean",
        "theme-sunset",
        "theme-nature",
    ];

    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem("theme") as Theme) || "theme-light"
    );

    const handleOnClickToggle = (t: Theme) => {
        //if (theme as type Theme)
        setTheme(t);
    };

    useEffect(() => {
        availableThemes.forEach((item) => {
            document.documentElement.classList.toggle(item, theme === item);
        });
        // document.documentElement.classList.toggle(
        //     "theme-dark",
        //     theme === "theme-dark"
        // );
        // document.documentElement.classList.toggle(
        //     "theme-ocean",
        //     theme === "theme-ocean"
        // );
        toast(`Theme is ${theme}`);
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div className="">
            <button
                onClick={() => {
                    handleOnClickToggle("theme-light");
                }}
            >
                Light
            </button>
            <button
                onClick={() => {
                    handleOnClickToggle("theme-dark");
                }}
            >
                dark
            </button>
            <button
                onClick={() => {
                    handleOnClickToggle("theme-ocean");
                }}
            >
                ocean
            </button>
            <button
                onClick={() => {
                    handleOnClickToggle("theme-sunset");
                }}
            >
                sunset
            </button>
            <button
                onClick={() => {
                    handleOnClickToggle("theme-nature");
                }}
            >
                nature
            </button>
        </div>
    );
}

export default ThemeToggler;
