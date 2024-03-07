import React, { useEffect, useState } from "react";
import { MAX, MIN } from "../constants";

const Progressbar = ({ value = 0 , onComplete = () => {}}) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(MAX, Math.max(value, MIN)));
  }, [value]);

  if(value >= MAX){
    onComplete();
  }

  return (
    <div className="progressbar">
      <span style={{ color: percent < 49 ? "black" : "white" }}>
        {percent} %
      </span>
      <div
        // style={{ width: `${percent}%` }}
        style={{transform: `scaleX(${percent/MAX})`, transformOrigin: "left"}}
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuenow={percent}
        aria-valuemax={MAX}
      />
    </div>
  );
};

export default Progressbar;
