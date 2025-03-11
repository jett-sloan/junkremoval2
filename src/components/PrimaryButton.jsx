"use client";
import React, { useState, useEffect } from "react";

const PrimaryButton = () => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Example: Mobile screens are less than 768px
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div
            style={{
                display: "flex",
                width: isMobile ? "150px" : "178px", // Adjust width based on mobile or desktop
                height: "57.2px", // 10% bigger than 52px
                backgroundColor: "#0016D9",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding drop shadow
            }}
        >
            <div
                style={{
                    display: "flex",
                    width: isMobile ? "130px" : "165px",
                    height: "44px", // 10% bigger than 40px
                    border: "2px solid white",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adding drop shadow to inner div
                }}
            >
                <a
                    href="contact"
                    style={{
                        fontFamily: "sans-serif",
                        color: "white",
                        fontSize: "20px"
                    }}
                >
                    Contact Us
                </a>
            </div>
        </div>
    )

}
export default PrimaryButton;