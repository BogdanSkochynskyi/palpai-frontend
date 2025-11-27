// src/components/MenuBar.jsx
import {
    FaHome,
    FaBook,
    FaChalkboardTeacher,
    FaChartLine,
    FaInfoCircle,
} from "react-icons/fa";

function MenuBar({ currentPage, onChangePage }) {
    const items = [
        { id: "home", label: "Home", icon: <FaHome /> },
        { id: "courses", label: "Courses", icon: <FaBook /> },
        { id: "lesson", label: "Lesson", icon: <FaChalkboardTeacher /> },
        { id: "progress", label: "Progress", icon: <FaChartLine /> },
        { id: "about", label: "About", icon: <FaInfoCircle /> },
    ];

    return (
        <nav className="app-menu">
            {items.map((item) => (
                <button
                    key={item.id}
                    className={
                        "menu-button" + (currentPage === item.id ? " menu-button-active" : "")
                    }
                    onClick={() => onChangePage(item.id)}
                >
                    <span>{item.icon}</span>
                    {item.label}
                </button>
            ))}
        </nav>
    );
}

export default MenuBar;
