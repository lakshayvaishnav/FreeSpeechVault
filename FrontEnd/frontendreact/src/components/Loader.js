import { useState, CSSProperties } from "react";
import HashLoader from "react-spinners/HashLoader";
import "../index.css";
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function Loader() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("purple");

  return (
    <div
      style={{ overflow: "hidden" }}
      className="h-screen  sweet-loading flex justify-center items-center flex-col bg-yellow-500 overflow-hidden absolute"
    >
      <HashLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        speedMultiplier={1.4}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      <div className="light-shadow text-2xl mt-10">
        Transaction Is Being Processed
      </div>
    </div>
  );
}

export default Loader;
