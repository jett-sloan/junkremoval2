"use client";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

const About = () => {
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
        minHeight: "100vh",
        backgroundColor: "#E2E6F8",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />
      <div style={{
        
        marginTop:"70px"
      }}>

      
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "2.5rem",
          fontFamily: "sans-serif",
          margin: "2% 8%",
          textAlign: isMobile ? "center" : "left",
          paddingTop:"0px"
        }}
      >
        About Me
      </h1>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          backgroundColor: "white",
          width: isMobile ? "95%" : "90%",
          margin: "3% auto",
          padding: isMobile ? "10px" : "0",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Mobile Image at the Top */}
        {isMobile && ( 
          <ImageSection
            imagePath="images/5B446B06-0AC4-4BF9-A445-62782FEC0CED.jpeg" // Replace with your image path
            altText="About Us"
          />
        )}

        {/* Left Section */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: isMobile ? "100%" : "70%",
            padding: "20px",
          }}
        >
          {/* My Story Section */}
          <Section
            title="My Story"
            text={
              <>
                I started this junk removal company with a simple goal:{" "}
                <strong style={{ color: "#0016D9", fontWeight: "bold" }}>
                  to help people reclaim their space
                </strong>{" "}
                and make their lives easier. After seeing how overwhelming it can be to clear out unwanted items,
                I knew there was a need for a{" "}
                <strong style={{ color: "#0016D9", fontWeight: "bold" }}>
                  reliable, efficient, and hassle-free solution.
                </strong>
                With a passion for service and a commitment to professionalism, I decided to build a business that would provide a helping hand to those in need
                of decluttering. Over time, our team has grown, but our core mission remains the same —{" "}
                <strong style={{ color: "#0016D9", fontWeight: "bold" }}>
                  to serve our community with respect and care.
                </strong>
              </>
            }
            isMobile={isMobile}
          />


          {/* My Mission Section */}
          <Section
            title="My Mission"
            text={
              <>
                Our mission is to provide{" "}
                <strong style={{ color: "#0016D9", fontWeight: "bold" }}>
                  fast, reliable, and eco-friendly junk removal services
                </strong>{" "}
                that help individuals and businesses create clean, clutter-free environments. We are committed to making the process as easy as possible, handling everything from removal to responsible disposal. By focusing on{" "}
                <strong style={{ color: "#0016D9", fontWeight: "bold" }}>
                  customer satisfaction, community involvement, and sustainability,
                </strong>{" "}
                we aim to make a positive impact on the lives of our clients and the planet.
              </>
            }
            isMobile={isMobile}
          />

        </div>

        {/* Right Section (Image for Desktop) */}
        {!isMobile && (
          <div style={{
            width: "90%",
            height: "500px",
            marginTop: "2.5rem",
            marginRight: "2rem",
            overflow: "hidden"
          }}>
            <img
              src="images/5B446B06-0AC4-4BF9-A445-62782FEC0CED.jpeg" // Replace with your image path
              alt="About Us"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                padding: 0,
                margin: 0,
                objectPosition: "right"
              }}
            />
          </div>
        )}

      </div>
      </div>
      {/* Footer Section */}
      <Footer />
    </div >
  );
};

// Reusable Section Component
const Section = ({ title, text, isMobile }) => (
  <div style={{ marginBottom: "20px" }}>
    <div
      style={{
        margin: isMobile ? "5% auto" : "2% 12.5%",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "1.5rem",
          fontFamily: "sans-serif",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          backgroundColor: "#0016D9",
          height: "4px",
          width: "75%",
          margin: "10px 0",
        }}
      ></div>
      <p
        style={{
          fontFamily: "sans-serif",
          fontWeight: "normal",
          fontSize: "0.875rem",
          wordBreak: "break-word",
          marginTop: "10px",
        }}
      >
        {text}
      </p>
    </div>
  </div>
);

// Reusable Image Section Component
const ImageSection = ({ imagePath, altText }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#808080",
      width: "100%",
      height: "200px",
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "10px",
    }}
  >
    <img
      src={imagePath}
      alt={altText}
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
);

export default About;
