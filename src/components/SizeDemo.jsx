import { Circle } from "react-feather";

const SizeDemo = () => {
  const sizeMap = ["16", "32", "48", "64", "96", "128", "144"];

  return (
    <>
      <h1 className="text-xl">Size Demo</h1>
      <div className="flex flex-row">
        {sizeMap.map((size, index) => (
          <Circle key={index} color="black" size={size} fill="black" />
        ))}
      </div>
    </>
  );
};

export default SizeDemo;
