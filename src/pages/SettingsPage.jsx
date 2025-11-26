function SettingsPage({ theme, fontSize, onChangeTheme, onChangeFontSize }) {
    const handleThemeChange = (event) => {
        onChangeTheme(event.target.value);
    };

    const handleFontSizeChange = (event) => {
        onChangeFontSize(event.target.value);
    };

    return (
        <div>
            <h2>UI Settings (Adaptivity)</h2>
            <p>
                Here you can adjust the user interface of PalpAI. This demonstrates
                the idea of adaptive UI that supports different user preferences
                and accessibility needs.
            </p>

            <div style={{ marginTop: "16px" }}>
                <h3>Color theme</h3>
                <label style={{ marginRight: "12px" }}>
                    <input
                        type="radio"
                        name="theme"
                        value="light"
                        checked={theme === "light"}
                        onChange={handleThemeChange}
                    />{" "}
                    Light
                </label>
                <label>
                    <input
                        type="radio"
                        name="theme"
                        value="dark"
                        checked={theme === "dark"}
                        onChange={handleThemeChange}
                    />{" "}
                    Dark
                </label>
            </div>

            <div style={{ marginTop: "16px" }}>
                <h3>Font size</h3>
                <select value={fontSize} onChange={handleFontSizeChange}>
                    <option value="small">Small</option>
                    <option value="normal">Normal</option>
                    <option value="large">Large</option>
                </select>
            </div>

            <p style={{ marginTop: "16px", fontStyle: "italic" }}>
                The selected settings are applied to the whole application: header,
                menu, content and footer.
            </p>
        </div>
    );
}

export default SettingsPage;
