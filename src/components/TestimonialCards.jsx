import React, { useState, useEffect } from "react";

const TestimonalsCards = ({ name, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen width is less than 768px (mobile)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        width: isMobile ? "22rem" : "26rem", // Adjust width for mobile
        height: isMobile ? "25rem" : "28rem", // Adjust height for mobile
        backgroundColor: "white",
        border: isHovered ? "2px solid #0016D9" : "1px solid grey",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        padding: "10px",
        alignItems: "center",
        borderRadius: "30px",
        transition: "all 0.3s ease-in-out",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        boxShadow: isHovered ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >



      <div
        style={{
          width: "80%",
          height: "75%",
          display: "flex",           // Enable flexbox
          justifyContent: "center",  // Center horizontally
          alignItems: "center",
        }}
      >
        <p
          style={{
            fontSize: isMobile ? "14px" : "16px", // Adjust text size for mobile
            fontStyle: "italic", // Makes the text italic
          }}
        >
          <span
            style={{
              fontSize: "2rem", // Bigger font size for the quotes
              color: "#0016D9", // Blue color for the quotes
              fontWeight: "bold", // Makes the quotes bold
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)", // Adds a subtle shadow to the quotes
            }}
          >
            "
          </span>
          {text}

        </p>
      </div>
      <div
        style={{
          backgroundColor: "#0016D9",
          height: "4px",
          width: "75%",
        }}
      >

      </div>
      <div>
        <h1
          style={{
            fontFamily: "sans-serif",
            fontSize: isMobile ? "1rem" : "1.25rem", // Adjust font size for mobile
            fontWeight: "600",
            paddingTop:"10px"
          }}
        >
          {name}
        </h1>

      </div>

      <div
        style={{
          paddingBottom: "20px",
          padding: "0",
        }}
      >
        <span style={{ fontSize: "2rem", color: "#EAEC48" }}>★</span>
        <span style={{ fontSize: "2rem", color: "#EAEC48" }}>★</span>
        <span style={{ fontSize: "2rem", color: "#EAEC48" }}>★</span>
        <span style={{ fontSize: "2rem", color: "#EAEC48" }}>★</span>
        <span style={{ fontSize: "2rem", color: "#EAEC48" }}>★</span>
      </div>
    </div>
  );
};

export default TestimonalsCards;
