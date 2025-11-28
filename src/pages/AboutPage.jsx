function AboutPage() {
    return (
        <div>
            <h2>About PalpAI</h2>
            <p>
                PalpAI is a prototype user interface of an intelligent adaptive learning
                platform with personalized interaction. It illustrates how AI-based
                educational systems can adapt content, difficulty and recommendations
                to each individual learner.
            </p>
            <p>
                The application demonstrates several key ideas of the dissertation:
            </p>
            <ul>
                <li>personalized learning paths for students;</li>
                <li>real-time tracking of progress and engagement;</li>
                <li>adaptive UI that supports different user preferences.</li>
            </ul>
            <p>
                This frontend is built with React and is intended to be connected to a
                Java backend in the next stages of the project.
            </p>
            <h3 style={{ marginTop: "20px" }}>Architecture Overview</h3>
            <p>
                PalpAI uses a modern three-tier architecture integrating a React frontend,
                a Java Spring Boot backend and a MySQL relational database. Communication
                between the layers is implemented through REST API endpoints.
            </p>

            <ul>
                <li><strong>Frontend (React)</strong> — renders UI, handles user interactions, sends requests to backend.</li>
                <li><strong>Backend (Spring Boot)</strong> — contains business logic, validates quiz answers, provides data for courses and tests.</li>
                <li><strong>Database (MySQL)</strong> — stores structured information: courses, quiz questions, metadata.</li>
                <li><strong>REST API</strong> — data exchange protocol between client and server.</li>
            </ul>

            <p>
                This architecture is easy to scale, maintain and extend. It also fits
                typical academic and industrial standards for modern educational platforms.
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

export default AboutPage;
