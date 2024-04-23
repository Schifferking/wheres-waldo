import styles from "./CharactersMenu.module.css";

function CharactersMenu(props) {
  const getNumberFromProperty = (property) => {
    const numberInString = property.match(/(\d+)/)[0];
    return Number(numberInString);
  };

  const calculateLeftProperty = () => {
    const boxBorderWith = 2;
    const space = 3;
    const boxWidth = 20 + boxBorderWith * 2;
    const spaceBetweenComponents = boxWidth + space;
    const boxLeft = getNumberFromProperty(props.boxStyle.left);
    const newLeft = boxLeft + spaceBetweenComponents;
    return String(newLeft) + "px";
  };

  const isNumberInRange = (num, rangeStart, rangeEnd) => {
    return num >= rangeStart && num <= rangeEnd;
  };

  const getCharacterEntry = (character) => {
    return props.characterPositions.find((cp) => cp.name === character);
  };

  const isCharacterFound = (character) => {
    const x = getNumberFromProperty(props.boxStyle.left) + props.offset;
    const y = getNumberFromProperty(props.boxStyle.top) + props.offset;
    const characterEntry = getCharacterEntry(character);
    const result =
      isNumberInRange(x, characterEntry.x_start, characterEntry.x_end) &&
      isNumberInRange(y, characterEntry.y_start, characterEntry.y_end);

    return result;
  };

  const updateCharacters = (foundCharacter) => {
    props.setCharacters(
      props.characters.map((character) => {
        if (character.name === foundCharacter) {
          return {
            ...character,
            found: true,
            left: props.boxStyle.left,
            top: props.boxStyle.top,
          };
        } else {
          return character;
        }
      })
    );
  };

  const handleClick = (character) => {
    const result = isCharacterFound(character);
    if (result) {
      updateCharacters(character);
    }

    props.setCharacterSearched(character);
    props.setIsCharacterFound(result);
    props.setIsImageClicked(false);
  };

  const hiddenCharacters = props.characters.filter(
    (character) => character.found === false
  );

  return (
    <div
      className={styles["pop-up"]}
      style={{
        "--left": calculateLeftProperty(),
        "--top": props.boxStyle.top,
        "--visibility": props.boxStyle.isVisible ? "visible" : "hidden",
      }}
    >
      <ul>
        {hiddenCharacters.map((character) => (
          <li key={character.name} onClick={() => handleClick(character.name)}>
            {character.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// to-do
// add prop-types

export default CharactersMenu;
