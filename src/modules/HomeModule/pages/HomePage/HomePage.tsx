import React, { useState } from "react";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Helo</h1>
      <div className="card">
        <p>
          See the README.md for more information on how to start your challenge.
        </p>
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          count is {count}
        </button>
      </div>
    </>
  );
};
