import React, { useState } from "react";
import '../styles/LoadingButton.css';

export default function LoadingButton() {
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        if (loading) return; // Prevent multiple clicks
        setLoading(true);

        // Simulate an async operation (e.g., API call)
        setTimeout(() => {
            setLoading(false);
            alert("Action completed!");
        }, 2000);
    };

    return (
        <button
            className={`loading-btn ${loading ? "loading" : ""}`}
            onClick={handleClick}
            disabled={loading}
        >
            {loading ? <span className="spinner"></span> : "Click Me"}
        </button>
    );
}