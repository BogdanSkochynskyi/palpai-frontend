import { FaLightbulb } from "react-icons/fa";
import { useState } from "react";

function ProgressPage() {
    const [recommendation, setRecommendation] = useState("");

    const handleShowRecommendation = () => {
        setRecommendation(
            "Based on your progress, PalpAI suggests focusing on the module " +
            '"AI for Personalized Learning" and repeating key quiz questions.'
        );
    };

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

            <div style={{ marginTop: "16px" }}>
                <button className="menu-button" onClick={handleShowRecommendation}>
          <span className="icon">
            <FaLightbulb />
          </span>
                    Show AI recommendation
                </button>
            </div>

            {recommendation && <p style={{ marginTop: "12px", fontStyle: "italic" }}>{recommendation}</p>}

            <div style={{ marginTop: "16px", textAlign: "center" }}>
                <img
                    src="/images/progress-chart.png"
                    alt="Example student progress chart"
                    style={{ maxWidth: "100%", borderRadius: "8px" }}
                />
                <p className="figure-caption">
                    Fig. 2 – Example of a progress chart used for adaptive recommendations.
                </p>
            </div>
        </div>
    );
}

export default ProgressPage;
