import { useEffect, useMemo, useState } from "react";

function Stopwatch({ stopwatchRunning }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;
    if (stopwatchRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!stopwatchRunning) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [stopwatchRunning]);

  const miliseconds = useMemo(() => {
    return ("0" + ((time / 10) % 100)).slice(-2);
  }, [time]);

  return (
    <div>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{miliseconds}</span>
    </div>
  );
}

export default Stopwatch;

// to-do
// add prop-types
