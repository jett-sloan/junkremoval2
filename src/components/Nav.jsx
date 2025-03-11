"use client";
import '../app/globals.css';
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu visibility
  };

  return (
    <header
      style={{
        display: "flex",
        backgroundImage: "linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))", // Gradient background
        height: "85px",
        width: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        position: "absolute", // Keep navbar fixed on top
        top: "0",
        left: "0",
        right: "0",
        zIndex: 2,
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start", width: '100%', marginLeft: "6.5%" }}>
        <a href='/'>
          <img
            src="images/ByeBye-Junk-Logo_png-removebg-preview.png"
            style={{ width: "150px", height: "150px" }}
            alt="Logo"
          />
        </a>
      </div>

      {/* If mobile, show hamburger menu */}
      {isMobile ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            marginLeft: "auto", // Align hamburger to the right
            marginRight: "10%",
          }}
          onClick={toggleMenu}
        >
          <div
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></div>
          <div
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></div>
          <div
            style={{
              width: "25px",
              height: "3px",
              backgroundColor: "white",
              margin: "4px 0",
            }}
          ></div>
        </div>
      ) : (
        // Otherwise, display the regular menu
        <div style={{ display: "flex", justifyContent: "space-evenly", width: "100%", alignItems: "center" }}>
          <div style={{ display: "flex" }}>
            <a href="/" style={{ fontFamily: "sans-serif", fontSize: "20px", color: "white" }}>Home</a>
          </div>
          <div style={{ display: "flex" }}>
            <a href="about" style={{ fontFamily: "sans-serif", fontSize: "20px", color: "white" }}>About</a>
          </div>
          <div style={{ display: "flex", marginRight: "10%", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <div
              style={{
                background: "#0016D9",
                padding: "10px",
                width: "162px",
                height: "52px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(0, 0, 0, 0)",
                  border: "2px solid white",
                  width: "150px",
                  height: "40px",
                }}
              >
                <a href="contact" style={{ fontSize: "20px", color: "white" }}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Show menu items when the hamburger menu is clicked */}
      {isMobile && isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "85px",
            right: "0",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <a href="/" style={{ color: "white", fontSize: "20px", margin: "10px" }}>Home</a>
          <a href="about" style={{ color: "white", fontSize: "20px", margin: "10px" }}>About</a>
          <div style={{ display: "flex", boxShadow: "4px 4px 10px rgba(0, 0, 0, 0.3)" }}>
            <div
              style={{
                background: "#0016D9",
                padding: "10px",
                width: "162px",
                height: "52px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "rgba(0, 0, 0, 0)",
                  border: "2px solid white",
                  width: "150px",
                  height: "40px",
                }}
              >
                <a href="contact" style={{ fontSize: "20px", color: "white" }}>Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
