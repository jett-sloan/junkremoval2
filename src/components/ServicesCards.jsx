// ServiceCard.js
import React from "react";
import { useState, useEffect } from "react";

const ServiceCard = ({ title, text }) => {
      const [isMobile, setIsMobile] = useState(false);
    
      useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
        };
    
        window.addEventListener("resize", handleResize);
        handleResize(); // Set the initial state
    
        return () => window.removeEventListener("resize", handleResize);
      }, []);
    return (
        <div
            style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#fff",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                width:isMobile? "80%":"564px",
                height:isMobile? "auto":"172px",
                display: "flex",
                flexDirection: "column", // Stack the items vertically
                marginBottom:"30px",
                paddingBottom:isMobile ? "10px" : "1px"
                

            }}
        >
            <div
                style={{
                    width: "100%",
                    height: "62px",
                    backgroundColor: "#E2E6F8"
                }}
            >
                <h3
                    style={{
                        marginLeft:"10%",
                        fontSize: "1.25rem",
                        fontWeight: "bold",
                        marginBottom: "10px",
                        color: "#333",
                        marginLeft:"10%"
                    }}
                >
                    {title}
                </h3>
                <div
                style={{
                    height:"6px",
                    width:"75%",
                    backgroundColor:"#0016D9",
                    textAlign: "center",  // Centers the text horizontally
                }}
                >

                </div>
            </div>

            <p
                style={{
                    fontSize: "1rem",
                    color: "#555",
                    lineHeight: "1.5",
                    width:"80%",
                    marginRight: "auto",  // Automatically adjusts right margin to center the element
                    marginLeft: "auto",  // Automatically adjusts left margin to center the element
                    direction: "ltr"  // Left-to-right text direction
                }}
            >
                {text}
            </p>
        </div>
    );
};

export default ServiceCard;
