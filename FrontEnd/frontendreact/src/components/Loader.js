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
  let [color, setColor] = useState("cyan");

  return (
    <div
      style={{ overflow: "hidden" }}
      className="h-screen w-screen  sweet-loading flex justify-center items-center flex-col bg-black absolute z-20 overflow-hidden "
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
