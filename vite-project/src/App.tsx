import { Route, Routes, BrowserRouter } from "react-router-dom";

//Components
import LandingPage from "./pages/LandingPage/LandingPage";
import GamePage from "./pages/GamePage/GamePage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import PageNotFoundPage from "./pages/PageNotFoundPage/PageNotFoundPage";

//
import { ToastContainer } from "react-toastify";
import { GameProvider } from "./context/GameContext/GameContext";

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
