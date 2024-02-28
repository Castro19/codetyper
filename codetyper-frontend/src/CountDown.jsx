import React, { useEffect } from "react";
import { useTimer } from "./Timer";

const CountDown = () => {
  const { time } = useTimer();

  useEffect(() => {
    if (time === 0) {
      manageTimer(false);
      manageText("");
      setTime(10);
    }
  }, [time]);
  return (
    <div>
      <h3>Timer: {time}</h3>
    </div>
  );
};

export default CountDown;
