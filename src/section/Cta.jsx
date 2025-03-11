import React, { useState, useEffect } from "react";

const Cta = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>

            <div
                style={{
                    position: "absolute", // Make it overlap content
                    backgroundColor: "#0016D9", // Sets the background color to blue
                    width: "80%", // Optional: Set the width to 100% of the parent
                    height: "200px", // Optional: Define a height for the div
                    marginTop: "-100px",
                    borderRadius: "50px", // Adds rounded corners
                    border: "1px solid #0016D9",
                    display: "flex", // Enables flexbox
                    flexDirection: "column", // Align items in a column
                    justifyContent: "center", // Center items vertically
                    alignItems: "center", // Center items horizontally
                    marginLeft: "10%",
                }}
            >
                <h1
                    style={{
                        fontWeight: "bold",
                        fontSize:"2rem",
                        fontFamily: "sans-serif",
                        color: "white",
                        paddingBottom: "18px"
                    }}
                >
                     {isMobile ? "Free Quote!" : "Request Your Free Quote Today!"}
                </h1>
                <div
                    style={{ display: "flex", width: isMobile ? "250px" : "350px", justifyContent: "space-between", }}
                >
                    <a
                        href="contact"
                        style={{
                            background: "white",
                            fontSize: isMobile ? "1rem" : "1.5rem",
                            fontFamily: "sans-serif",
                            padding: "10px 20px",
                            fontWeight: 600,
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adds the shadow
                            borderRadius: "4px",
                        }}
                    >
                        Contact Us
                    </a>
                    <button
                        onClick={() => (window.location.href = "tel:+813-459-5731")}
                        style={{
                            background: "white",
                            fontSize: isMobile ? "1rem" : "1.5rem", // Smaller font size for mobile
                            fontFamily: "sans-serif",
                            padding: isMobile ? "8px 16px" : "10px 20px", // Adjust padding for mobile
                            fontWeight: 600,
                            color: "#0016D9",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Adds the shadow
                            borderRadius: "4px",
                        }}
                    >
                        Call Now
                    </button>
                </div>

            </div>
        </>
    )
}

export default Cta