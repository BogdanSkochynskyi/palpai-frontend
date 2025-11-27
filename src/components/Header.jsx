// src/components/Header.jsx
import { FaBullseye } from "react-icons/fa";

function Header({
                    theme,
                    fontSize,
                    focusMode,
                    onChangeTheme,
                    onChangeFontSize,
                    onToggleFocusMode,
                }) {
    const toggleTheme = () => {
        onChangeTheme(theme === "light" ? "dark" : "light");
    };

    return (
        <header className="app-header">
            <div className="header-text">
                <h1>PalpAI – Personal Adaptive Learning Path AI</h1>
                <p>Intelligent adaptive learning platform with personalized interaction.</p>
                <p className="helper-text">
                    Dissertation topic: Methods of building an intelligent adaptive learning
                    platform with personalized interaction.
                </p>
            </div>

            {/* Панель керування UI справа */}
            <div className="ui-controls">
                {/* Тема */}
                <button className="ui-link" onClick={toggleTheme}>
                    {theme === "light" ? "Dark" : "Light"}
                </button>

                {/* Розмір шрифту S | N | L */}
                <div className="font-size-controls">
                    <button
                        className={
                            "ui-link" + (fontSize === "small" ? " active" : "")
                        }
                        onClick={() => onChangeFontSize("small")}
                    >
                        S
                    </button>
                    <span className="font-size-separator">|</span>
                    <button
                        className={
                            "ui-link" + (fontSize === "normal" ? " active" : "")
                        }
                        onClick={() => onChangeFontSize("normal")}
                    >
                        N
                    </button>
                    <span className="font-size-separator">|</span>
                    <button
                        className={
                            "ui-link" + (fontSize === "large" ? " active" : "")
                        }
                        onClick={() => onChangeFontSize("large")}
                    >
                        L
                    </button>
                </div>

                {/* Focus mode */}
                <button
                    className={"ui-link" + (focusMode ? " active" : "")}
                    onClick={() => onToggleFocusMode(!focusMode)}
                    title="Toggle focus mode"
                >
          <span className="ui-link-icon">
            <FaBullseye />
          </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
