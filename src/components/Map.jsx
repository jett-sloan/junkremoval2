// MapComponent.js
"use client"

const MapComponent = () => {


  return (
    <div
      style={{
        width: "100%",
        height: "12rem",
        margin: "0 auto",
      }}
    >
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d356392.09339412115!2d-82.53272920000001!3d27.8417688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c7f45b5b0e29%3A0x9ad2e4a81cf76935!2sHillsborough%20County%2C%20FL!5e0!3m2!1sen!2sus!4v1614362234567!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default MapComponent;
