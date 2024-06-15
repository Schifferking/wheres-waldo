import PropTypes from "prop-types";
import styles from "./HighScores.module.css";

function HighScores({ bestScores }) {
  return (
    <div className={styles["table-container"]}>
      <table className={styles["high-scores"]}>
        <caption>High scores</caption>
        <thead>
          <tr>
            <th>Name</th>
            <th>Score (time in seconds)</th>
          </tr>
        </thead>
        <tbody>
          {bestScores.map((bestScore) => {
            return (
              <tr key={bestScore["time_elapsed"]}>
                <td>{bestScore.name}</td>
                <td className={styles["number"]}>
                  {bestScore["time_elapsed"].toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

HighScores.propTypes = {
  bestScores: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HighScores;
