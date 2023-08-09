import "./App.css";
import DefaultCard from "./Card";

function App() {
  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div className={"dix"}></div>
      <div
        style={{
          zIndex: 10,
          width: "100vw",
          height: "50vh",
          // fontWeight: 700,
          textAlign: "left",
        }}
      >
        <h2 className="text-3xl font-bold ">Hello world!</h2>
      </div>
    </div>
  );
}

export default App;
