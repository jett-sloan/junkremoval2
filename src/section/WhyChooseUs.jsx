"use client";
import React, { useState, useEffect } from "react";
import wcu from "../../public/images/wcu.jpg";
import Yus from "../components/Yus";
import YusLabel from "../components/YusLabel";

const WhyChooseUs = () => {
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
                flexDirection: isMobile ? "column" : "row",
                justifyContent: "space-between",
                height: "100%",
                backgroundColor: "#E2E6F8",
            }}
        >
            {/* Left Section */}
            <div style={{ flex: 1, padding: "20px" }}>
                <div style={{ 
                    marginLeft: isMobile ? "0%": "20%",
                    display:"flex",
                    justifyContent: isMobile ? "center" : "flex-start"
                    
                    }}>
                    <h1
                        style={{
                            fontWeight: "bold",
                            fontSize: "2.5rem",
                            fontFamily: "sans-serif",
                        }}
                    >
                        Why Choose Us?
                    </h1>
                </div>
                <div
                    style={{
                        height: "70%",
                        width: "60%",
                        marginLeft: "20%",
                        marginTop: "5%",
                    }}
                >
                    <img
                        src={wcu.src}
                        alt="light demolition junk removal"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </div>
            </div>

            {/* Center Section */}
            <div
                style={{
                    flex: 1.5,
                    marginTop: "3%",
                    backgroundColor: "#E2E6F8",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    height: "90%",
                    position: "relative", // Required for overlapping
                    paddingBottom: "20px" // Adjust the value to your desired padding
                }}
            >
                <div style={{ display: "flex", flexDirection: "column" ,paddingBottom:"10px"}}>
                    <div style={{
                        marginBottom: "-10px",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start"
                    }}
                    >
                        <YusLabel header="Locally Owned" />
                    </div>
                    <div>
                        <Yus text="Our business provides tailored services, we understand the specific needs of our clients and community." />
                    </div>
                </div>

                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    display: "flex",
                    justifyContent: isMobile ? "center" : "flex-start",
                    paddingBottom:"10px"
                }}>
                    <div style={{
                        marginBottom: "-10px",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start"
                    }}
                    > {/* Move the label down slightly */}
                        <YusLabel header="Small Business" />
                    </div>
                    <div>
                        <Yus text="We work directly with decision-makers to prioritize your goals and adapt quickly to feedback. This ensures you get exactly what you’re looking for." />
                    </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column",paddingBottom:"10px" }}>
                    <div style={{
                        marginBottom: "-10px",
                        zIndex: 1,
                        display: "flex",
                        justifyContent: isMobile ? "center" : "flex-start"
                    }}
                    >
                        {/* Move the label down slightly */}
                        <YusLabel header="Reliable" />
                    </div>
                    <div>
                        <Yus text="We ensure quality through personal involvement, with our reputation tied to community trust, motivating us to go the extra mile for customers." />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
