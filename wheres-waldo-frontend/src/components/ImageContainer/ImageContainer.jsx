import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import TargetingBox from "../TargetingBox/TargetingBox";
import CharactersMenu from "../CharactersMenu/CharactersMenu";
import image from "../../wheres-waldo-department-store.png";
import styles from "./ImageContainer.module.css";

function ImageContainer({
  characterPositions,
  setStopwatchRunning,
  channelRef,
}) {
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
  const [areAllCharactersFound, setAllCharactersFound] = useState(false);
  const [characterSearched, setCharacterSearched] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const imageRef = useRef(null);
  const mousePageClickCoordinatesRef = useRef(null);
  const mouseClientClickCoordinatesRef = useRef(null);
  const charactersFound = characters.filter((character) => character.found);
  const updateIsClicked = () => {
    if (isClicked) {
      setIsClicked(false);
    } else {
      setIsClicked(true);
    }
  };

  const isCoordinatesValid = (coordinates, imageRect) => {
    /* This is a value independent of current scrolling position */
    const actualBottom = imageRect.bottom + window.scrollY;
    return (
      imageRect.left <= coordinates.x &&
      coordinates.x <= imageRect.right &&
      imageRect.top <= coordinates.y &&
      coordinates.y <= actualBottom
    );
  };

  const onClick = (e) => {
    const imageRect = imageRef.current.getBoundingClientRect();
    const coordinates = { x: e.pageX, y: e.pageY };
    const areCoordinatesValid = isCoordinatesValid(coordinates, imageRect);
    if (areCoordinatesValid) {
      const imageClickCoordinates = {
        x: e.clientX - imageRect.x,
        y: e.clientY - imageRect.y,
      };

      updateIsClicked();
      mousePageClickCoordinatesRef.current = coordinates;
      mouseClientClickCoordinatesRef.current = imageClickCoordinates;
      setIsImageClicked(true);
    }
  };

  useEffect(() => {
    const charactersFoundLength = charactersFound.length;
    if (charactersFoundLength === 4 && !areAllCharactersFound) {
      setStopwatchRunning(false);
      setAllCharactersFound(true);
      channelRef.current.send({ message: "done" });
    }
  }, [charactersFound]);

  useEffect(() => {
    /* change the condition of executing this effect before updating 
       boxStyle and assign the x and y values from getBoundingClientRect
       in refs
    */
    if (mousePageClickCoordinatesRef.current) {
      const newLeft = mousePageClickCoordinatesRef.current.x - offset;
      const newTop = mousePageClickCoordinatesRef.current.y - offset;
      setboxStyle({
        left: `${newLeft}px`,
        top: `${newTop}px`,
        isVisible: true,
      });
    }
  }, [isClicked]);

  return (
    <div className={styles["image-container"]} ref={imageRef}>
      <img
        className={styles["image"]}
        src={image}
        onClick={onClick}
        onLoad={() => setStopwatchRunning(true)}
        alt="Wheres Waldo? - Department Store"
      />
      {charactersFound.length < 4 && isImageClicked ? (
        <>
          <TargetingBox onClick={onClick} boxStyle={boxStyle} />
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
            imageClickCoordinates={mouseClientClickCoordinatesRef.current}
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

ImageContainer.propTypes = {
  characterPositions: PropTypes.arrayOf(PropTypes.object).isRequired,
  setStopwatchRunning: PropTypes.func.isRequired,
  channelRef: PropTypes.object.isRequired,
};

// note: consider to generate characters array based on characterPositions

export default ImageContainer;
