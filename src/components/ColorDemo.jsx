import { Circle } from "react-feather";

const ColorDemo = () => {
  const colorMap = ["#A63578", "teal", "#000000", "orange", "red", "green"];
  return (
    <>
      <h1 className="text-xl">Color Demo</h1>
      <div className="flex flex-row">
        {colorMap.map((color, index) => (
          <Circle color={color} fill={color} key={index} size={128} />
        ))}
      </div>
    </>
  );
};

export default ColorDemo;
