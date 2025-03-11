"use client";
import phone from '../../public/images/phone.png';
console.log(phone); // Should be a valid string URL or path

const SecondaryButton = () => {
    return (
<div
    style={{
        display: "flex",
        width: "178px", // Same size as PrimaryButton
        height: "57.2px", // Same size as PrimaryButton
        backgroundColor: "white", // White background
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Adding drop shadow
    }}
>
    <div
        style={{
            display: "flex",
            width: "165px", // Same size as PrimaryButton
            height: "44px", // Same size as PrimaryButton
            border: "2px solid #0016D9", // Blue border
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Adding drop shadow to inner div
        }}
    >
        <button
            style={{
                fontFamily: "sans-serif",
                color: "#0016D9", // Blue text color
                fontSize: "20px",
                textDecoration: "none", // Remove underline
                display: "flex", // Flex for alignment with image
                alignItems: "center",
                gap: "8px", // Add spacing between text and image
            }}
            onClick={() => (window.location.href = "tel:+813-459-5731")}
        >
            Call Now
            <img
                src={phone.src}
                alt="Phone Icon"
                style={{
                    width: "20px",
                    height: "20px",
                }}
            />
        </button>
    </div>
</div>

    );
};

export default SecondaryButton;
