"use client";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import React, { useState, useEffect } from "react";


const Contact = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSending(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          action: "sendGmail",
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Email sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus(data.error || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("Error sending email. Please try again.");
    } finally {
      setIsSending(false);
    }
  };


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div
        style={{
          backgroundColor: "#0033cc",
          width: "100%",
          height: "500px",
          borderBottomLeftRadius: "50%",
          borderBottomRightRadius: "50%",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            width: "80%",
            justifyContent: "space-between",
            marginTop: "70px"
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "2rem", fontFamily: "sans-serif", color: "white", marginTop: "5%" }}>
            Contact Us Below!
          </h1>
          {!isMobile && (
            <h1 style={{ fontWeight: "bold", fontSize: "2rem", fontFamily: "sans-serif", color: "white", marginTop: "5%" }}>
              Or Call
              <span
                style={{
                  backgroundColor: "white",
                  color: "black",
                  padding: "10px 20px",
                  borderRadius: "50px",
                  marginLeft: "10px",
                  fontSize: "1.5rem",
                }}
              >
                813-459-5731
              </span>
            </h1>
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-start", width: "80%", marginTop: "20px" }}>
          <p style={{ wordBreak: "break-word", whiteSpace: "normal", lineHeight: "1.5", fontSize: "20px", color: "white" }}>
            Have questions or ready to schedule your service? We’re here to help! Don’t hesitate to reach out — we’d love to hear from you.
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            marginTop: isMobile ? "-40%" : "-13%",
            height: "700px",
            width: "80%",
            marginBottom: isMobile ? "0px" : "80px",
            backgroundColor: "white",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: isMobile ? "100%" : "50%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              marginTop: "30px"
            }}
          >
            <form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: isMobile ? "300px" : "500px" }}>
              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#333", marginLeft: "3%" }}>
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: "95%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    height: "78px",
                    backgroundColor: "rgba(226, 230, 248, 0.3)",
                    display: "block",
                    margin: "0 auto",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label htmlFor="email" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#333", marginLeft: "3%" }}>
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: "95%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    height: "78px",
                    backgroundColor: "rgba(226, 230, 248, 0.3)",
                    display: "block",
                    margin: "0 auto",
                  }}
                  required
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label htmlFor="message" style={{ display: "block", marginBottom: "5px", fontWeight: "bold", color: "#333", marginLeft: "3%" }}>
                  Message
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  name="message"
                  placeholder="Write your message"
                  rows="4"

                  style={{
                    width: "95%",
                    padding: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    height: "225px",
                    backgroundColor: "rgba(226, 230, 248, 0.3)",
                    display: "block",
                    margin: "0 auto",
                  }}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSending}
                style={{
                  width: "100%",
                  padding: "10px",
                  backgroundColor: "#0033cc",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
              {status && (
                <p
                  style={{
                    paddingTop: "20px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color:"green"
                  }}
                >
                  {status}
                </p>
              )}
            </form>

          </div>

          <div
            style={{
              width: isMobile ? "0%" : "50%",
              height: "100%",
              borderRadius: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="images/image.jpg"
              alt="Contact Page"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>

      {isMobile && (
        <div
          style={{
            backgroundColor: "#E2E6F8",
            width: "90%",
            height: "200px",
            marginTop: "50px",
            borderRadius: "30px",
            border: "1px solid #0016D9",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "5%",
          }}
        >
          <h1 style={{ fontWeight: "bold", fontSize: "3rem", fontFamily: "sans-serif" }}>Or Call :</h1>
          <p
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily: "sans-serif",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            813-459-5731
            <img
              src="images/phone_image-removebg-preview.png"
              alt="Phone"
              style={{ height: "30px" }}
            />
          </p>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
