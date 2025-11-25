function MenuBar({ currentPage, onChangePage }) {
    const items = [
        { id: "home", label: "Home" },
        { id: "courses", label: "Courses" },
        { id: "lesson", label: "Lesson" },
        { id: "progress", label: "Progress" },
        { id: "settings", label: "Settings" },
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
                    {item.label}
                </button>
            ))}
        </nav>
    );
}

export default MenuBar;
