import { useEffect, useState } from "react";
import { API_BASE_URL } from "../apiConfig";

function LessonPage() {
    const [question, setQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1); // для індикації прогресу
    const [loadingQuestion, setLoadingQuestion] = useState(true);
    const [error, setError] = useState(null);

    const [selectedOption, setSelectedOption] = useState("");
    const [answerResult, setAnswerResult] = useState(null); // { correct, correctOption }
    const [checkingAnswer, setCheckingAnswer] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        loadFirstQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function loadFirstQuestion() {
        try {
            setLoadingQuestion(true);
            setError(null);
            setIsFinished(false);
            setQuestionIndex(1);
            setAnswerResult(null);
            setSelectedOption("");

            const response = await fetch(`${API_BASE_URL}/quiz/first`);
            if (response.status === 204) {
                setIsFinished(true);
                setQuestion(null);
                return;
            }
            if (!response.ok) {
                throw new Error("Failed to load first question");
            }

            const data = await response.json();
            setQuestion(data);
        } catch (e) {
            setError(e.message || "Unknown error");
        } finally {
            setLoadingQuestion(false);
        }
    }

    async function loadNextQuestion() {
        if (!question) return;

        try {
            setLoadingQuestion(true);
            setError(null);
            setAnswerResult(null);
            setSelectedOption("");

            const response = await fetch(
                `${API_BASE_URL}/quiz/next/${question.id}`
            );

            if (response.status === 204) {
                // питань більше немає
                setIsFinished(true);
                setQuestion(null);
                return;
            }

            if (!response.ok) {
                throw new Error("Failed to load next question");
            }

            const data = await response.json();
            setQuestion(data);
            setQuestionIndex((prev) => prev + 1);
        } catch (e) {
            setError(e.message || "Unknown error");
        } finally {
            setLoadingQuestion(false);
        }
    }

    async function handleSubmitAnswer() {
        if (!question || !selectedOption) return;

        try {
            setCheckingAnswer(true);
            setError(null);

            const response = await fetch(
                `${API_BASE_URL}/quiz/${question.id}/answer`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ selectedOption }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to check answer");
            }

            const data = await response.json();
            setAnswerResult(data);
        } catch (e) {
            setError(e.message || "Unknown error");
        } finally {
            setCheckingAnswer(false);
        }
    }

    const isAnswerCorrect = answerResult?.correct;

    return (
        <div>
            <h2>Lesson: Adaptive Quiz</h2>
            <p>
                This lesson demonstrates how PalpAI can communicate with the backend to
                provide an adaptive quiz. Questions and answers are stored in a MySQL
                database and checked on the server side.
            </p>

            {/* Секція квізу */}
            <div style={{ marginTop: "16px" }}>
                <h3>Mini-quiz: Intelligent adaptive learning</h3>

                {loadingQuestion && <p className="helper-text">Loading question...</p>}
                {error && (
                    <p className="helper-text" style={{ color: "#b91c1c" }}>
                        Error: {error}
                    </p>
                )}

                {isFinished && !loadingQuestion && (
                    <div style={{ marginTop: "12px" }}>
                        <p>
                            The quiz is finished. You have answered all available questions
                            from the backend.
                        </p>
                        <button
                            className="icon-button"
                            onClick={loadFirstQuestion}
                            style={{ marginTop: "8px" }}
                        >
                            Restart quiz
                        </button>
                    </div>
                )}

                {!isFinished && !loadingQuestion && question && (
                    <div style={{ marginTop: "12px" }}>
                        <p className="helper-text">
                            Question {questionIndex}
                        </p>
                        <p style={{ marginTop: "4px", marginBottom: "8px" }}>
                            {question.question}
                        </p>

                        <div style={{ display: "grid", gap: "6px" }}>
                            {["A", "B", "C", "D"].map((opt) => {
                                const text = question[`option${opt}`];
                                if (!text) return null;
                                return (
                                    <label key={opt}>
                                        <input
                                            type="radio"
                                            name="quiz-option"
                                            value={opt}
                                            checked={selectedOption === opt}
                                            onChange={(e) => setSelectedOption(e.target.value)}
                                            disabled={!!answerResult}
                                        />{" "}
                                        {opt}) {text}
                                    </label>
                                );
                            })}
                        </div>

                        <div style={{ marginTop: "10px", display: "flex", gap: "8px" }}>
                            <button
                                className="icon-button"
                                onClick={handleSubmitAnswer}
                                disabled={!selectedOption || !!answerResult || checkingAnswer}
                            >
                                {checkingAnswer ? "Checking..." : "Submit answer"}
                            </button>

                            <button
                                className="icon-button"
                                onClick={loadNextQuestion}
                                disabled={!answerResult || loadingQuestion}
                            >
                                Next question
                            </button>
                        </div>

                        {answerResult && (
                            <p
                                style={{
                                    marginTop: "10px",
                                    fontWeight: "500",
                                    color: isAnswerCorrect ? "#15803d" : "#b91c1c",
                                }}
                            >
                                {isAnswerCorrect
                                    ? "Correct!"
                                    : `Incorrect. Correct answer: ${answerResult.correctOption}.`}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LessonPage;
