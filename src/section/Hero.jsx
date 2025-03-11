import React, { useState, useEffect } from "react";
import Navbar from "../components/Nav";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/SecondaryButton";

const HeroPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Example: Mobile screens are less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service); // Update the state with the selected service
  };

  const getBackgroundAndText = () => {
    if (selectedService === "pickup") {
      return {
        background: "url('images/pickupbgcropped.JPG')",
        text: "Our pick-up service makes it easy to clear out your unwanted items. Simply choose a convenient time for our team to come to your location. We'll load up everything you want to get rid of and take care of the disposal. You don't have to lift a finger!",
      };
    } else if (selectedService === "trailer") {
      return {
        background: "url('/images/dumptrailerbg.jpg')",
        text: "Rent one of our driveway-safe dumpsters Today! Say Bye Bye to your junk your way. We drop-off the dumpster to your driveway and you fill it yourself and we haul it away. To book your dumpster Today click below.  ",
      };
    }
    return {
      background: "url('images/IMG_9227.04a6110bd6de616ac938.jpeg')", // Default background
      text: "At Bye Bye Junk, we offer easy and convenient junk removal services.",
    };
  };

  const { background, text } = getBackgroundAndText();

  return (
    <>
      <div
        style={{
          width: '30%',        // Adjust the width as needed
          height: '100%',      // Adjust the height as needed
          backgroundColor: 'black', // Sets the background color to black
        }}
      ></div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "650px",
          backgroundImage: background, // Dynamically change background
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover", // Make sure the image covers the whole div
          justifyContent: "flex-start", // Align items to the start (top)
          alignItems: "flex-start", // Align items to the start (left)
        }}

      >


        {/* Gradient overlay */}
        {/* <div
          style={{
            position: "absolute", // Positioning the overlay over the image
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))", // Left-to-right gradient
            zIndex: 0, // Keep the gradient behind the content
            pointerEvents: "none", // Allow interactions with elements behind the gradient
          }}
       
        >


      </div> */}

        {/* Your Navbar stays above the background and gradient */}
        <Navbar />

        {/* Content over the background */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", // Makes the layout a column
            width: "90%",
            position: "absolute",
            top: isMobile ? "15%" : "10%",
            left: "10%",
            zIndex: 1, // Ensures content is above the background and gradient
          }}
        >
          <div style={{ display: "flex", marginTop: "4.5%" }}>
            <h1
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: isMobile ? "2.5rem" : "3.5rem",
                fontFamily: "sans-serif",
              }}
            >
              {isMobile && (selectedService === "pickup" || selectedService === "trailer")
                ? "ByeByeJunk"
                : "Quick & Easy Junk"}
              <br />

              {!(isMobile && (selectedService === "pickup" || selectedService === "trailer")) ? (
                <>
                  <span style={{ color: "white" }}>Removal – </span>
                  <span style={{ color: "#0016D9" }}>Call Us Today!</span>
                </>
              ) : null}
            </h1>
          </div>

          <div
            style=
            {{
              display: "flex",
              justifyContent: "flex-start",
              width: isMobile ? "100%" : "60%"
            }}>
            <h2
              style={{
                color: "white",
                fontWeight: "semi-bold",
                fontSize: isMobile ? "1rem" : "1.5rem",
                fontFamily: "sans-serif",
              }}
            >
              {text}

              <>
                <button
                  onClick={() => handleServiceClick("pickup")}

                  style={{
                    color: "#0016D9",
                    textDecoration: "underline",
                    fontWeight: "semi-bold",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    WebkitTextStroke: ".5px white",
                    paddingLeft: isMobile ? "0px" : "10px",
                    paddingRight: isMobile ? "0px" : "10px",
                  }}
                >
                  Pick up services
                </button>
                -
                <button
                  onClick={() => handleServiceClick("trailer")}

                  style={{
                    color: "#0016D9",
                    textDecoration: "underline",
                    fontWeight: "semi-bold",
                    fontSize: isMobile ? "1.5rem" : "2rem",
                    WebkitTextStroke: ".5px white",
                    paddingLeft: isMobile ? "0px" : "10px",
                    paddingRight: isMobile ? "0px" : "10px",
                  }}
                >
                  Dump Trailer Rental
                </button>
              </>

            </h2>
          </div>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              height: "100px",
              justifyContent: "flex-start",
              marginLeft: isMobile ? "0%" : "9%",
              alignItems: "center",
            }}
          >
            <div>
              <PrimaryButton />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginLeft: "2%",
              }}
            >
              <SecondaryButton />
            </div>
            <div style={{ display: isMobile ? "none" : "block" }}>
              <p style={{ color: "white", marginLeft: "20px" }}>
                Call (813) - 459 - 5731 for same day quote
              </p>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default HeroPage;
