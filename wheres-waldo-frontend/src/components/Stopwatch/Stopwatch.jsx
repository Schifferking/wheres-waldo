import { useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";
import styles from "./Stopwatch.module.css";

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
    <div className={styles["stopwatch-container"]}>
      <span>Time: </span>
      <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
      <span>{miliseconds}</span>
    </div>
  );
}

Stopwatch.propTypes = {
  stopwatchRunning: PropTypes.bool.isRequired,
};

export default Stopwatch;
