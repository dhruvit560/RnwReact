import React, { useState, useEffect } from "react";

function FunctionbaseCompontent() {
  const time = new Date().toLocaleTimeString();
  const [ctime, setTime] = useState(time);
  const IncNum = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    setInterval(IncNum,1000);
  });
  return (
    <>
      <div id="MyClockDisplay" className="clock">
        {ctime}
      </div>
    </>
  );
}

export default FunctionbaseCompontent;
