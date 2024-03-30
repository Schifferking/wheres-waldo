import styles from "./TargetingBox.module.css";

function TargetingBox({ onClick, boxStyle }) {
  return (
    <div
      className={styles["box"]}
      onClick={onClick}
      style={{
        "--left": boxStyle.x,
        "--top": boxStyle.y,
        "--visibility": boxStyle.isVisible ? "visible" : "hidden",
      }}
    ></div>
  );
}

// to-do
// add proptTypes

export default TargetingBox;