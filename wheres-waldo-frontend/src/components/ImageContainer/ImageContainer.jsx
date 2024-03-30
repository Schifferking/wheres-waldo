import { useState } from "react";
import TargetingBox from "../TargetingBox/TargetingBox";
import CharactersMenu from "../CharactersMenu/CharactersMenu";
import image from "../../wheres-waldo-department-store.png";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  const [boxStyle, setboxStyle] = useState({
    x: "0px",
    y: "0px",
    isVisible: false,
  });

  const onClick = (e) => {
    const offset = 15;
    setboxStyle({
      x: `${e.clientX - offset}px`,
      y: `${e.clientY - offset}px`,
      isVisible: true,
    });
  };

  return (
    <div>
      <img
        className={styles["image"]}
        src={image}
        onClick={onClick}
        alt="Wheres Waldo? - Department Store"
      />
      <TargetingBox onClick={onclick} boxStyle={boxStyle} />
      <CharactersMenu boxStyle={boxStyle} />
    </div>
  );
}

export default ImageContainer;
