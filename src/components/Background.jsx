

const BackgroundImage = () => {
    //   const [isMobile, setIsMobile] = useState(false);

    //   useEffect(() => {
    //     const handleResize = () => {
    //       setIsMobile(window.innerWidth < 768); // Mobile screens are less than 768px
    //     };

    //     window.addEventListener("resize", handleResize);
    //     handleResize();

    //     return () => window.removeEventListener("resize", handleResize);
    //   }, []);

    return (
        <div
style={{
    display: "flex",
      flexDirection: "column",
}}
        >
            {/* Image */}
            <img
                src="images/homepagebeforefade.png"
                alt="Your Image"
                layout="responsive"
                style={{
                    width: "100%",
                    height: "650px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                }}
            />

            {/* Gradient Overlay */}
            <div
                style={{
                    content: "",
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to right, black 0%, transparent 100%)",
                    pointerEvents: "none", // Ensure it doesn't block interactions with the image
                }}
            />
        </div>
    )
};

export default BackgroundImage;
