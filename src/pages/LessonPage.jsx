import { useEffect, useState } from "react";
import { API_BASE_URL } from "../apiConfig";

const TOTAL_QUESTIONS = 5; // наш міні-тест на 5 питань

function LessonPage() {
    const [question, setQuestion] = useState(null);
    const [questionIndex, setQuestionIndex] = useState(1);
    const [loadingQuestion, setLoadingQuestion] = useState(true);
    const [error, setError] = useState(null);

    const [selectedOption, setSelectedOption] = useState("");
    const [answerResult, setAnswerResult] = useState(null); // { correct, correctOption }
    const [checkingAnswer, setCheckingAnswer] = useState(false);
    const [isFinished, setIsFinished] = useState(false);

    const [totalCorrect, setTotalCorrect] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);

    useEffect(() => {
        loadFirstQuestion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    async function loadFirstQuestion() {
        try {            setLoadingQuestion(true);
            setError(null);
            setIsFinished(false);
            setQuestionIndex(1);
            setAnswerResult(null);
            setSelectedOption("");
            setTotalCorrect(0);
            setTotalAnswered(0);

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

            const response = await fetch(`${API_BASE_URL}/quiz/next/${question.id}`);

            if (response.status === 204) {
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
            setTotalAnswered((prev) => prev + 1);
            if (data.correct) {
                setTotalCorrect((prev) => prev + 1);
            }
        } catch (e) {
            setError(e.message || "Unknown error");
        } finally {
            setCheckingAnswer(false);
        }
    }

    const isAnswerCorrect = answerResult?.correct;
    const progressPercent =
        TOTAL_QUESTIONS > 0 ? (totalAnswered / TOTAL_QUESTIONS) * 100 : 0;

    const getOptionClass = (opt) => {
        let base = "quiz-option";

        if (!answerResult) {
            if (selectedOption === opt) {
                base += " selected";
            }
            return base;
        }

        // Після перевірки відповіді:
        if (answerResult.correctOption === opt) {
            base += " correct";
        } else if (
            selectedOption === opt &&
            !answerResult.correct &&
            answerResult.correctOption !== opt
        ) {
            base += " incorrect";
        }

        return base;
    };

    return (
        <div>
            <h2>Lesson: Adaptive Quiz</h2>
            <p>
                This lesson demonstrates how PalpAI communicates with the backend to
                provide an adaptive quiz. Questions and answers are stored in a MySQL
                database and checked on the server side.
            </p>

            <div className="quiz-card">
                <div className="quiz-progress">
                    <div className="quiz-progress-header">
            <span>
              Question {Math.min(questionIndex, TOTAL_QUESTIONS)} of{" "}
                {TOTAL_QUESTIONS}
            </span>
                        <span>
              Correct: {totalCorrect}/{TOTAL_QUESTIONS}
            </span>
                    </div>
                    <div className="quiz-progress-bar">
                        <div
                            className="quiz-progress-bar-fill"
                            style={{ width: `${progressPercent}%` }}
                        />
                    </div>
                </div>

                {loadingQuestion && (
                    <p className="helper-text">Loading question...</p>
                )}
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
                        <p className="helper-text">
                            You answered correctly {totalCorrect} out of {TOTAL_QUESTIONS}{" "}
                            questions.
                        </p>
                        <div className="quiz-actions">
                            <button className="icon-button" onClick={loadFirstQuestion}>
                                Restart quiz
                            </button>
                        </div>
                    </div>
                )}

                {!isFinished && !loadingQuestion && question && (
                    <div style={{ marginTop: "12px" }}>
                        <p style={{ marginBottom: "8px" }}>{question.question}</p>

                        <div className="quiz-options">
                            {["A", "B", "C", "D"].map((opt) => {
                                const text = question[`option${opt}`];
                                if (!text) return null;
                                return (
                                    <label key={opt} className={getOptionClass(opt)}>
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

                        <div className="quiz-actions">
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
