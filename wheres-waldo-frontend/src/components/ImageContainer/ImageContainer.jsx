import { useState } from "react";
import TargetingBox from "../TargetingBox/TargetingBox";
import CharactersMenu from "../CharactersMenu/CharactersMenu";
import image from "../../wheres-waldo-department-store.png";
import styles from "./ImageContainer.module.css";

function ImageContainer({ characterPositions }) {
  const [boxStyle, setboxStyle] = useState({
    left: "0px",
    top: "0px",
    isVisible: false,
  });

  const [characters, setCharacters] = useState([
    { name: "Waldo", found: false, left: "0px", top: "0px" },
    { name: "Odlaw", found: false, left: "0px", top: "0px" },
    { name: "Wilma", found: false, left: "0px", top: "0px" },
    { name: "Wizard Whitebeard", found: false, left: "0px", top: "0px" },
  ]);

  const [offset, setOffest] = useState(15);
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [isCharacterFound, setIsCharacterFound] = useState(true);
  const [characterSearched, setCharacterSearched] = useState("");
  const charactersFound = characters.filter((character) => character.found);
  const onClick = (e) => {
    setboxStyle({
      left: `${e.clientX - offset}px`,
      top: `${e.clientY - offset}px`,
      isVisible: true,
    });

    setIsImageClicked(true);
  };

  return (
    <div>
      <img
        className={styles["image"]}
        src={image}
        onClick={onClick}
        alt="Wheres Waldo? - Department Store"
      />
      {charactersFound.length < 4 && isImageClicked ? (
        <>
          <TargetingBox onClick={onclick} boxStyle={boxStyle} />
          <CharactersMenu
            boxStyle={boxStyle}
            offset={offset}
            characters={characters}
            setCharacters={setCharacters}
            characterPositions={characterPositions}
            setIsImageClicked={setIsImageClicked}
            charactersFound={charactersFound}
            setIsCharacterFound={setIsCharacterFound}
            setCharacterSearched={setCharacterSearched}
          />
        </>
      ) : null}
      {charactersFound.length < 4 && !isImageClicked && !isCharacterFound ? (
        <div
          className={styles["error-message"]}
          style={{ "--left": boxStyle.left, "--top": boxStyle.top }}
        >
          {characterSearched} is not here
        </div>
      ) : null}
      {charactersFound.map((character) => {
        return (
          <div
            key={character.name}
            className={styles["marker"]}
            style={{
              "--left": character.left,
              "--top": character.top,
            }}
          ></div>
        );
      })}
    </div>
  );
}

// to-do
// add prop-types
// note: consider to generate characters array based on characterPositions

export default ImageContainer;
