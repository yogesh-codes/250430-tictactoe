import { ReactElement, SVGProps, ComponentProps, HTMLAttributes } from "react";
import { Link, type LinkProps } from "react-router-dom";

interface NavItemProps {
    to: string;
    title: string;
    /** exactly two children: first an <svg>, then a <Link> */
    children: ReactElement<SVGProps<SVGSVGElement>, "svg">;
    // ReactElement<HTMLAttributes<HTMLSpanElement>, "span">
    // ReactElement<LinkProps, typeof Link>
}

export function NavItemLink({ to, title, children: icon }: NavItemProps) {
    return (
        <div>
            <Link
                to={to}
                className="px-2 inline-flex items-center justify-center"
            >
                <span className="flex items-center w-6 h-6">{icon}</span>
                <span className="text-2xl text-center">{title}</span>
            </Link>
        </div>

        // <div className="inline-flex items-center space-x-2 justify-center">
        //     {icon}
        //     {link}
        // </div>
    );
}
