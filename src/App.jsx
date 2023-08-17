import { useState } from "react";
import "./App.css";

function App() {
  const [hour, setHour] = useState(new Date().getHours());
  const [Minute, setMinute] = useState(new Date().getMinutes());
  const [Second, setSecond] = useState(new Date().getMinutes());
  setInterval(() => {
    setHour(new Date().getHours());
    setMinute(new Date().getMinutes());
    setSecond(new Date().getSeconds());
  }, 1000);

  return (
    <>
      <div className="dix"></div>
      <div
        style={{
          zIndex: 10,
          width: "100vw",
          position: "absolute",
          height: "100vh",
          alignItems: "flex-start",
        }}
      >
        <div
          style={{
            height: "80vh",
            display: "flex",

            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "10px",
              color: "rgb(176, 176, 176)",
              fontWeight: "bolder",

              fontSize: "70px",
            }}
          >
            <p style={{ display: "flex", alignItems: "baseline" }}>
              {hour}
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                h
              </p>
            </p>
            <p style={{ display: "flex", alignItems: "baseline" }}>
              {Minute}
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                m
              </p>
            </p>
            <p style={{ display: "flex", alignItems: "baseline" }}>
              {Second}
              <p
                style={{
                  fontSize: "20px",
                }}
              >
                s
              </p>
            </p>
          </div>
          <div
            style={{
              width: "400px",
              height: "10px",
              backgroundColor: "red",
            }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
