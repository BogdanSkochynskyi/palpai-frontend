import { useState } from "react";
import "./index.css";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";

import HomePage from "./pages/HomePage";
import CoursesPage from "./pages/CoursesPage";
import LessonPage from "./pages/LessonPage";
import ProgressPage from "./pages/ProgressPage";
import SettingsPage from "./pages/SettingsPage";

function App() {
    const [currentPage, setCurrentPage] = useState("home");

    const [theme, setTheme] = useState("light");
    const [fontSize, setFontSize] = useState("normal");

    const renderPage = () => {
        switch (currentPage) {
            case "courses":
                return <CoursesPage />;
            case "lesson":
                return <LessonPage />;
            case "progress":
                return <ProgressPage />;
            case "settings":
                return (
                    <SettingsPage
                        theme={theme}
                        fontSize={fontSize}
                        onChangeTheme={setTheme}
                        onChangeFontSize={setFontSize}
                    />
                );
            case "home":
            default:
                return <HomePage />;
        }
    };

    return (
        <div className={`app theme-${theme} font-${fontSize}`}>
            <main className="app-main">
                <Header />
                <MenuBar currentPage={currentPage} onChangePage={setCurrentPage} />
                <section className="app-content">{renderPage()}</section>
                <Footer />
            </main>

            <ScrollToTopButton />
        </div>
    );
}

export default App;
