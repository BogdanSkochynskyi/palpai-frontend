function CoursesPage() {
    return (
        <div>
            <h2>Available Courses</h2>
            <p>
                This section shows an example list of courses that can be managed by
                the adaptive learning platform. In a real system, these courses would
                be loaded from the backend and adapted to each student.
            </p>

            <div className="card-grid">
                <div className="card">
                    <h3>Introduction to Java</h3>
                    <p>Level: Beginner</p>
                    <p>Recommended for: students with no prior programming experience.</p>
                </div>
                <div className="card">
                    <h3>AI for Personalized Learning</h3>
                    <p>Level: Intermediate</p>
                    <p>Recommended for: students interested in educational data mining.</p>
                </div>
                <div className="card">
                    <h3>User Interface Design for e-Learning</h3>
                    <p>Level: Intermediate</p>
                    <p>Recommended for: students focusing on human-computer interaction.</p>
                </div>
            </div>
        </div>
    );
}

export default CoursesPage;
