import { useState } from "react";

const ColorPicker = () => {
  const colors = ["red", "green", "blue", "yellow", "purple"];
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const handleColorClick = () => {
    setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
  };

  const currentColor = colors[currentColorIndex];

  return (
    <div>
      <h1 style={{ color: currentColor }}>Current Color: {currentColor}</h1>
      <button onClick={handleColorClick}>Next Color</button>
    </div>
  );
};

export default ColorPicker;
