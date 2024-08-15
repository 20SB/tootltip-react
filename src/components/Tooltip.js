import React, { useState } from "react";
import "../assets/Tooltip.css";

// Tooltip component that displays a tooltip with customizable position and text
const Tooltip = ({ position, text, children }) => {
    // useState hook to manage the visibility state of the tooltip
    const [isVisible, setIsVisible] = useState(false);

    // Function to handle mouse entering the tooltip container, showing the tooltip
    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    // Function to handle mouse leaving the tooltip container, hiding the tooltip
    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    return (
        // Wrapper div that acts as the tooltip container and manages hover events
        <div
            className="tooltip-container"
            onMouseEnter={handleMouseEnter} // Show tooltip on mouse enter
            onMouseLeave={handleMouseLeave} // Hide tooltip on mouse leave
        >
            {children} {/* Render the child elements (e.g., button, text) within the container */}
            {isVisible && (
                // Conditionally render the tooltip only when isVisible is true
                <div className={`tooltip ${position}`}>{text}</div>
            )}
        </div>
    );
};

export default Tooltip;
