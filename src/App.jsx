import { Suspense, useState } from "react";
import demos from "./data/demos";
import importDemo from "./utils/importDemo";

const App = () => {
  const [selectedDemo, setSelectedDemo] = useState(null);

  const loadDemo = async (file) => {
    const Demo = await importDemo(file);
    return <Demo />;
  };

  const selectDemo = async (file) => {
    const DemoComponent = await loadDemo(file);
    setSelectedDemo(DemoComponent);
  };
  return (
    <div className="flex flex-col items-center">
      <div>
        <h2 className="text-3xl">React Lazy load explained</h2>
        <div>
          {demos.map((demo) => (
            <button
              key={demo.id}
              className="border m-2"
              onClick={() => selectDemo(demo.file)}
            >
              {demo.name}
            </button>
          ))}
        </div>

        <div className="mt-4">
          <Suspense fallback={<h2>Loading...</h2>}>{selectedDemo}</Suspense>
        </div>
      </div>
    </div>
  );
};

export default App;
