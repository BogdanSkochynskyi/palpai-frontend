import { FaArrowUp } from "react-icons/fa";

function ScrollToTopButton() {
    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button className="scroll-top-btn" onClick={handleClick}>
            <FaArrowUp />
        </button>
    );
}

export default ScrollToTopButton;
