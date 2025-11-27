import { useEffect, useState } from "react";
import { API_BASE_URL } from "../apiConfig";

function CoursesPage() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCourses() {
            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`${API_BASE_URL}/courses`);
                if (!response.ok) {
                    throw new Error("Failed to load courses");
                }

                const data = await response.json();
                setCourses(data);
            } catch (e) {
                setError(e.message || "Unknown error");
            } finally {
                setLoading(false);
            }
        }

        loadCourses();
    }, []);

    return (
        <div>
            <h2>Available Courses</h2>
            <p>
                This list of courses is loaded from the PalpAI backend (Java + MySQL).
                In a real system, each course could be personalized for a specific student.
            </p>

            {loading && <p className="helper-text">Loading courses...</p>}
            {error && (
                <p className="helper-text" style={{ color: "#b91c1c" }}>
                    Error: {error}
                </p>
            )}

            {!loading && !error && courses.length === 0 && (
                <p>No courses found.</p>
            )}

            {!loading && !error && courses.length > 0 && (
                <div className="card-grid">
                    {courses.map((course) => (
                        <div key={course.id} className="card">
                            <h3>{course.title}</h3>
                            {course.level && <p>Level: {course.level}</p>}
                            {course.description && <p>{course.description}</p>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CoursesPage;
