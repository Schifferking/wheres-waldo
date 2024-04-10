import { useState } from "react";
import TargetingBox from "../TargetingBox/TargetingBox";
import CharactersMenu from "../CharactersMenu/CharactersMenu";
import image from "../../wheres-waldo-department-store.png";
import styles from "./ImageContainer.module.css";

function ImageContainer() {
  const [boxStyle, setboxStyle] = useState({
    left: "0px",
    top: "0px",
    isVisible: false,
  });

  const [offset, setOffest] = useState(15);

  const onClick = (e) => {
    setboxStyle({
      left: `${e.clientX - offset}px`,
      top: `${e.clientY - offset}px`,
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
      <CharactersMenu boxStyle={boxStyle} offset={offset} />
    </div>
  );
}

// to-do
// pass CharacterPositions to CharactersMenu

export default ImageContainer;
