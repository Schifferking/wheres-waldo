import styles from "./CharactersMenu.module.css";

function CharactersMenu({ characterPositions, boxStyle, offset }) {
  const characters = ["Waldo", "Odlaw", "Wilma", "Wizard Whitebeard"];
  const getNumberFromProperty = (property) => {
    const numberInString = property.match(/(\d+)/)[0];
    return Number(numberInString);
  };

  const calculateLeftProperty = () => {
    const boxBorderWith = 2;
    const space = 3;
    const boxWidth = 20 + boxBorderWith * 2;
    const spaceBetweenComponents = boxWidth + space;
    const boxLeft = getNumberFromProperty(boxStyle.left);
    const newLeft = boxLeft + spaceBetweenComponents;
    return String(newLeft) + "px";
  };

  const isNumberInRange = (num, rangeStart, rangeEnd) => {
    return num >= rangeStart && num <= rangeEnd;
  };

  const validateCharacter = (character) => {
    const x = getNumberFromProperty(boxStyle.left) + offset;
    const y = getNumberFromProperty(boxStyle.top) + offset;
    // get character x ranges
    // get character y ranges
    // replace numbers with actual character ranges
    return isNumberInRange(x, 0, 1000) && isNumberInRange(y, 0, 1000);
  };

  return (
    <div
      className={styles["pop-up"]}
      style={{
        "--left": calculateLeftProperty(),
        "--top": boxStyle.top,
        "--visibility": boxStyle.isVisible ? "visible" : "hidden",
      }}
    >
      <ul>
        {characters.map((character) => (
          <li key={character} onClick={() => validateCharacter(character)}>
            {character}
          </li>
        ))}
      </ul>
    </div>
  );
}

// to-do
// add prop-types
// finish validateCharacter function
// note: consider to generate characters array based on characterPositions

export default CharactersMenu;
