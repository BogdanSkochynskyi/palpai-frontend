function ProgressPage() {
    return (
        <div>
            <h2>Student Progress & Analytics</h2>
            <p>
                This section represents how PalpAI can visualize student progress.
                The platform can track completed lessons, scores, time spent and
                engagement.
            </p>
            <p>
                Based on this data, the system can detect knowledge gaps and suggest
                additional materials or practice tasks.
            </p>
            <ul>
                <li>Completed lessons: 7 / 12</li>
                <li>Average quiz score: 82%</li>
                <li>Recommended focus: &quot;AI for Personalized Learning&quot; module</li>
            </ul>

            <div style={{ marginTop: "16px", textAlign: "center" }}>
                <img
                    src="/images/progress-chart.png"
                    alt="Example student progress chart"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
                <p style={{ fontSize: "0.9rem", color: "#6b7280", marginTop: "6px" }}>
                    Fig. 2 – Example of a progress chart used for adaptive recommendations.
                </p>
            </div>
        </div>
    );
}

export default ProgressPage;
