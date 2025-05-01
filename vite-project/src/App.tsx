import { Route, Routes, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import GamePage from "./components/GamePage/GamePage";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import PageNotFoundPage from "./components/PageNotFoundPage/PageNotFoundPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>
                <Route path="/game" element={<GamePage />}></Route>
                <Route path="/settings" element={<SettingsPage />}></Route>
                <Route path="/*" element={<PageNotFoundPage />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
