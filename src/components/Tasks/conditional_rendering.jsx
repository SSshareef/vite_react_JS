export const BackroundColorChange = ({ Season = "summer" }) => {
  if (Season === "summer") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <div
          style={{
            backgroundColor: "red",
            width: 500,
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 60, fontFamily: "Arial" }}>
            I am summer
          </h1>
        </div>
      </div>
    );
  } else if (Season === "winter") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <div
          style={{
            backgroundColor: "skyblue",
            width: 500,
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 60, fontFamily: "Arial" }}>
            I am summer
          </h1>
        </div>
      </div>
    );
  }else if (Season === "rainy") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "95vh",
        }}
      >
        <div
          style={{
            backgroundColor: "gray",
            width: 500,
            height: 500,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white", fontSize: 60, fontFamily: "Arial" }}>
            I am summer
          </h1>
        </div>
      </div>
    );
  }
};
