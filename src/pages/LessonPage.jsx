function LessonPage() {
    return (
        <div>
            <h2>Sample Lesson: Adaptive Recommendations</h2>
            <p>
                This lesson demonstrates how PalpAI can adapt content. In a real
                platform, the difficulty and type of tasks would depend on the
                student&apos;s previous answers, time on task and behavior.
            </p>

            <h3 style={{ marginTop: "12px" }}>Short quiz</h3>
            <p>Question: What is the main goal of an adaptive learning system?</p>
            <ul>
                <li>A) To show the same content to all students</li>
                <li>B) To personalize content and learning paths</li>
                <li>C) To replace teachers completely</li>
            </ul>
            <p style={{ marginTop: "8px", fontStyle: "italic" }}>
                In a real system, your answer would be analyzed and the next step would
                be selected automatically.
            </p>
        </div>
    );
}

export default LessonPage;
