import React, { useRef, useState, useEffect } from "react";
import TestimonalsCards from "../components/TestimonialCards";

const Testimonals = () => {
    const scrollRef = useRef(null);

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const scrollLeft = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const lastCard = container.children[container.children.length - 1];

            // Check if the scroll position is at the beginning of the container
            if (container.scrollLeft === 0) {
                container.scrollTo({
                    left: lastCard.offsetLeft, // Scroll to the last card
                    behavior: "smooth",
                });
            } else {
                container.scrollBy({
                    left: -300, // Adjust the value for scroll distance
                    behavior: "smooth",
                });
            }
        }
    };

    const scrollRight = () => {
        if (scrollRef.current) {
            const container = scrollRef.current;


            // Check if the scroll position is at the end of the container
            if (container.scrollLeft + container.offsetWidth === container.scrollWidth) {
                container.scrollTo({
                    left: 0, // Scroll to the first card
                    behavior: "smooth",
                });
            } else {
                container.scrollBy({
                    left: 300, // Adjust the value for scroll distance
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div
            style={{
                backgroundImage: "url('images/IMG_0270.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "850px",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}>
                {isMobile ? "Testimonials" : "What People Have Been Saying About Us"}
            </h1>

            {/* Container for scrolling and navigation buttons */}
            <div
                style={{
                    position: "relative",
                    width: "80%",
                    maxWidth: "1000px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden", // Hide the scrollbar here
                }}
            >
                {/* Left Navigation Button */}
                {!isMobile && (
                    <button
                        onClick={scrollLeft}
                        style={{
                            position: "absolute",
                            left: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            padding: "10px",
                            cursor: "pointer",
                            zIndex: "1000",
                        }}
                    >
                        &#8249;
                    </button>
                )}
                {/* Testimonial Cards Container */}
                <div
                    ref={scrollRef}
                    style={{
                        display: "flex",
                        gap: "20px",
                        width: "100%",
                        overflowX: "scroll", // Enable scrolling by clicking the buttons
                        scrollBehavior: "smooth", // Smooth scroll when the user clicks the buttons
                        scrollbarWidth: "none", // Hide scrollbar for Firefox
                        msOverflowStyle: "none", // Hide scrollbar for IE and Edge
                        height: "530px"
                    }}
                >
                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Christ Novitch"}
                            text="These guys were awesome. They gave me a fair quote over the phone and showed on time 2 hours later and had my large items out in about 15 mins! We called a few companies for quotes and not only were they reasonable, but they also had same day service and positive attitudes! Definitely recommend and will use them again!"
                        />
                    </div>

                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Anisha Patel"}
                            text="Super fast and reliable junk removal in Tampa. Called them out to remove a couch and dresser and they were able to get it done in the same day! Will not hesitate to use them again."
                        />
                    </div>

                    {/* Add more TestimonalsCards here */}
                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Lisa Sloan"}
                            text="I had so many different things that needed to be gone, and they made the process so easy. The team was fast, friendly, and efficient, handling everything with care. I’m so glad I chose this service, and I’ll definitely be using them again in the future!"
                        />
                    </div>
                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Christ Novitch"}
                            text="These guys were awesome. They gave me a fair quote over the phone and showed on time 2 hours later and had my large items out in about 15 mins! We called a few companies for quotes and not only were they reasonable, but they also had same day service and positive attitudes! Definitely recommend and will use them again!"
                        />
                    </div>
                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Christ Novitch"}
                            text="These guys were awesome. They gave me a fair quote over the phone and showed on time 2 hours later and had my large items out in about 15 mins! We called a few companies for quotes and not only were they reasonable, but they also had same day service and positive attitudes! Definitely recommend and will use them again!"
                        />
                    </div>
                    <div
                        style={{
                            flex: "none", // Prevent cards from resizing
                            width: "300px", // Set the width of each card
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <TestimonalsCards
                            name={"Christ Novitch"}
                            text="These guys were awesome. They gave me a fair quote over the phone and showed on time 2 hours later and had my large items out in about 15 mins! We called a few companies for quotes and not only were they reasonable, but they also had same day service and positive attitudes! Definitely recommend and will use them again!"
                        />
                    </div>
                </div>


                {/* Right Navigation Button */}
                {!isMobile && (
                    <button
                        onClick={scrollRight}
                        style={{
                            position: "absolute",
                            right: "10px",
                            top: "50%",
                            transform: "translateY(-50%)",
                            background: "rgba(0, 0, 0, 0.7)",
                            color: "white",
                            border: "none",
                            borderRadius: "50%",
                            padding: "10px",
                            cursor: "pointer",
                            zIndex: "1000",
                        }}
                    >
                        &#8250;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Testimonals;
