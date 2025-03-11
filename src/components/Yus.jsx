import React, { useState, useEffect } from "react";

const Yus = ({ text }) => { // Added `text` as a prop
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 968); // Example: Mobile screens are less than 968px
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Call once to set the initial state

        return () => window.removeEventListener("resize", handleResize); // Cleanup on unmount
    }, []);

    return (
        <div
            style={{
                width: isMobile ? "90%" : "500px", // Adjust width for mobile
                height: "120px",
                border: "1px solid #F5F5F5", // Fixed typo in "solid"
                margin: "0 auto", // Center the div horizontally
                display: "flex",
                alignItems: "center", // Center content vertically
                justifyContent: "center" // Center content horizontally
            }}
        >
            <p
                style={{
                    fontSize: isMobile ? "0.8rem" : "1rem", // Smaller font size for mobile
                    textAlign: "left",
                    color: "black",
                    lineHeight: "1.5",
                    width:"80%"
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default Yus;
