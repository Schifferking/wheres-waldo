import PropTypes from "prop-types";
import styles from "./TargetingBox.module.css";

function TargetingBox({ onClick, boxStyle }) {
  return (
    <div
      className={styles["box"]}
      onClick={onClick}
      style={{
        "--left": boxStyle.left,
        "--top": boxStyle.top,
        "--visibility": boxStyle.isVisible ? "visible" : "hidden",
      }}
    ></div>
  );
}

TargetingBox.propTypes = {
  onClick: PropTypes.func.isRequired,
  boxStyle: PropTypes.exact({
    left: PropTypes.string,
    top: PropTypes.string,
    isVisible: PropTypes.bool,
  }).isRequired,
};

export default TargetingBox;
