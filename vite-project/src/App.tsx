import { Route, Routes, BrowserRouter } from "react-router-dom";

//Components
import LandingPage from "./components/LandingPage/LandingPage";
import GamePage from "./components/GamePage/GamePage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import PageNotFoundPage from "./components/PageNotFoundPage/PageNotFoundPage";

//
import { ToastContainer } from "react-toastify";
import { GameProvider } from "./components/GameContext/GameContext";

function App() {
    return (
        <BrowserRouter>
            <GameProvider>
                <Routes>
                    <Route path="/" element={<LandingPage />}></Route>
                    <Route path="/game" element={<GamePage />}></Route>
                    <Route path="/settings" element={<SettingsPage />}></Route>
                    <Route path="/*" element={<PageNotFoundPage />}></Route>
                </Routes>
                <ToastContainer
                    position="bottom-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    pauseOnHover
                    draggable
                />
            </GameProvider>
        </BrowserRouter>
    );
}

export default App;
