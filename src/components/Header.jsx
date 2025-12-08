import {FaBullseye} from "react-icons/fa";

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
                <h1>PalpAI – Personal Adaptive Learning Paths AI</h1>
                <p>Intelligent adaptive learning platform with personalized interaction.</p>
                <p className="helper-text">
                    Dissertation topic: Methods for building an intelligent adaptive learning platform with personalized
                    interaction based on artificial intelligence technologies.
                </p>
            </div>

            <div className="ui-controls">
                <button className="ui-link" onClick={toggleTheme}>
                    {theme === "light" ? "Dark" : "Light"}
                </button>

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

                <button
                    className={"ui-link" + (focusMode ? " active" : "")}
                    onClick={() => onToggleFocusMode(!focusMode)}
                    title="Toggle focus mode"
                >
          <span className="ui-link-icon">
            <FaBullseye/>
          </span>
                </button>
            </div>
        </header>
    );
}

export default Header;
