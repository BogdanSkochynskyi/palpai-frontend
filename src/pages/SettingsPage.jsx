function SettingsPage() {
    return (
        <div>
            <h2>UI Settings (Adaptivity)</h2>
            <p>
                In this section the user will be able to adjust the user interface
                of PalpAI. This demonstrates the concept of adaptive UI that supports
                different user preferences and accessibility needs.
            </p>
            <ul>
                <li>Change font size (small / normal / large)</li>
                <li>Switch color theme (light / dark)</li>
                <li>Adjust content width or focus mode</li>
            </ul>
            <p>
                Later we will implement real controls (buttons, dropdowns) that change
                the appearance of the whole application.
            </p>
        </div>
    );
}

export default SettingsPage;
