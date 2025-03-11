const YusLabel = ({ header }) => {
    return (
        <div
            style={{
                backgroundColor: "#F5F5F5",
                width: "266px",
                height: "72px",
                borderRadius: "50px",
                border: "1px solid #0016D9",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <h3
                style={{
                    fontFamily: "sans-serif",
                    fontSize: "20px",
                    color: "black",
                    fontWeight:600
                }}
            >
                {header}
            </h3>
        </div>
    );
};

export default YusLabel;
