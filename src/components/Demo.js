import { useState, useMemo } from "react";
import { findNthPrime } from "../utils/helper";
const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "border border-black w-96 h-96 m-4 p-2" +
        (isDarkTheme && " bg-gray-800 text-white")
      }
    >
      <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="mb-4 px-2 py-1 border border-black"
        >
          Toggle Theme
        </button>
      </div>

      <div>
        <input
          className="border border-black px-2 w-72"
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <h1 className="mt-4 font-bold text-xl">
          The Nth Prime Number is: {prime}
        </h1>
      </div>
    </div>
  );
};

export default Demo;
