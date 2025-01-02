import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  const generateColor = () => {
    if (typeOfColor === "rgb") {
      const randomRGB = () =>
        `rgb(${[...Array(3)]
          .map(() => Math.floor(Math.random() * 256))
          .join(",")})`;
      return randomRGB();
    } else {
      const randomHex = () =>
        `#${[...Array(6)]
          .map(() => "0123456789ABCDEF"[Math.floor(Math.random() * 16)])
          .join("")}`;
      return randomHex();
    }
  };

  useEffect(() => {
    setColor(generateColor());
  }, [typeOfColor]);

  const handleGenerateColor = () => {
    setColor(generateColor());
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <div style={{ display: "flex", gap: "20px" }}>
        <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
        <button onClick={handleGenerateColor}>Generate Random Color</button>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h3>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
