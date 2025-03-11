"use client";
import React, { useState, useEffect } from "react";
import Map from "../components/Map"
const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 968); // Example: Mobile screens are less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          backgroundColor: "#E2E6F8",
          color: "white",
          height: isMobile ? "auto" : "400px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "flex-start" : "center",
          alignItems: isMobile ? "flex-start" : "center",
          padding: isMobile ? "20px" : "0",
          borderTop: "2px solid #0033cc"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            width: isMobile ? "100%" : "92%",
          }}
        >
          {/* Column 1 */}
          <div style={{ flex: 1, marginBottom: isMobile ? "20px" : "0" }}>
            <img
              src="images/ByeBye-Junk-Logo_png-removebg-preview.png"
              style={{
                width: isMobile ? "200px" : "400px",
                height: isMobile ? "200px" : "400px",
                margin: isMobile ? "0 auto" : "-100px 0",
              }}
              alt="Logo"
            />
            <div
              style={{
                width: isMobile ? "100%" : "300px",
                textAlign: isMobile ? "center" : "left",
                marginLeft: isMobile ? "0%" : "20%",
              }}
            >
              <p
                style={{
                  color: "black",
                  fontSize: "1rem",
                  lineHeight: "1.5",
                  marginTop: isMobile ? "10px" : "-90px",
                }}
              >
                Welcome to Bye Bye Junk, FL, where we transform cluttered spaces into organized, usable areas.
              </p>
            </div>
          </div>

          {/* Column 2 */}
          <div
            style={{
              flex: isMobile ? "1" : "0.5",
              textAlign: "center",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                color: "black",
                fontWeight: 600,
              }}
            >
              Serving
            </h3>
            <p
              style={{
                color: "black",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
            >
              Land O Lakes <br />
              Citrus <br />
              Carrollwood <br />
              Greater Northdale
            </p>
          </div>

          {/* Column 3 */}
          <div
            style={{
              flex: 1,
              textAlign: "center",
              marginBottom: isMobile ? "20px" : "0",
            }}
          >
            <h3
              style={{
                color: "black",
                fontSize: "1.5rem",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Get In Touch
            </h3>
            <p
              style={{
                color: "black",
                fontSize: "1rem",
                lineHeight: "1.5",
                marginBottom: "30px",
              }}
            >
              813-459-5731 <br />
              ByeByeJunk.co@gmail.com
            </p>
            <h3
              style={{
                color: "black",
                fontSize: "1.5rem",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Quick Links
            </h3>
            <p
              style={{
                color: "black",
                fontSize: "1rem",
                lineHeight: "1.5",
              }}
            >
              <a href="/">Home</a> <br />
              <a href="about">About</a> <br />
              <a href="contact">Contact</a>
            </p>
          </div>

          {/* Column 4 */}
          <div style={{ flex: 1, textAlign: isMobile ? "center" : "left" }}>
            <h3
              style={{
                color: "black",
                fontSize: "1.5rem",
                marginBottom: "10px",
                fontWeight: 600,
              }}
            >
              Map
            </h3>
            <Map/>
          </div>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "1rem",
          borderTop: "1px solid white",
          paddingTop: "10px",
          color: "black",
          backgroundColor: "#E2E6F8",
        }}
      >
        © {new Date().getFullYear()} Bye Bye Junk All Rights Reserved.
      </div>
    </>
  );
};

export default Footer;
