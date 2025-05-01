import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="flex justify-center align-middle w-full h-16 bg-amber-300">
            <nav>
                <ul className="flex justify-center align-middle gap-4">
                    <li>
                        <Link to="/" className="w-16">
                            Landing
                        </Link>
                    </li>
                    <li>
                        <Link to="/game" className="w-16">
                            Game
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings" className="w-16">
                            Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;
