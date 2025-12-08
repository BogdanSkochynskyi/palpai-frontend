function HomePage() {
    return (
        <div>
            <h2>Overview of PalpAI</h2>
            <p>
                PalpAI is a prototype of an intelligent adaptive learning platform.
                It uses artificial intelligence to personalize learning paths for each
                student based on their goals, knowledge level and behavior.
            </p>
            <p>
                The main idea is to move from static learning content to dynamic,
                adaptive scenarios where the platform can recommend the next lesson,
                difficulty level or assessment based on real-time analytics.
            </p>
            <ul>
                <li>Personalized learning paths</li>
                <li>Real-time progress tracking</li>
                <li>AI-based recommendations</li>
            </ul>

            <div style={{ marginTop: "16px", textAlign: "center" }}>
                <img
                    src="/images/adaptive-architecture.png"
                    alt="High-level architecture of the adaptive learning platform"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
                <p className="figure-caption">
                    Example architecture of an AI-based adaptive learning platform.
                </p>
            </div>
            <p>
                PalpAI uses a modern three-tier architecture integrating a React frontend,
                a Java Spring Boot backend and a MySQL relational database. Communication
                between the layers is implemented through REST API endpoints.
            </p>
            <div style={{ marginTop: "16px", textAlign: "center" }}>
                <img
                    src="/images/about-page-architecture.webp"
                    alt="Application Architecture"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
                <p className="figure-caption">
                    PalpAI application architecture.
                </p>
            </div>
        </div>
    );
}

export default HomePage;
