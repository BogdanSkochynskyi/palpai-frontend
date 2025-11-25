import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage";
import ProgressPage from "./pages/ProgressPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    const renderPage = () => {
        switch (currentPage) {
            case "courses":
                return <CoursesPage />;
            case "lesson":
                return <LessonPage />;
            case "progress":
                return <ProgressPage />;
            case "settings":
                return <SettingsPage />;
            case "home":
            default:
                return <HomePage />;
        }
    };

    return (
        <div className="app">
            <main className="app-main">
                <Header />
                <MenuBar currentPage={currentPage} onChangePage={setCurrentPage} />
                <section className="app-content">{renderPage()}</section>
                <Footer />
            </main>
        </div>
    );
}

export default App;
