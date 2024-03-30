import styles from "./CharactersMenu.module.css";

function CharactersMenu({ boxStyle }) {
  const characters = ["Waldo", "Odlaw", "Wilma", "Wizard Whitebeard"];
  const calculateMenuHorizontalPosition = () => {
    const boxBorderWith = 2;
    const space = 3;
    const boxWidth = 20 + boxBorderWith * 2;
    const offset = boxWidth + space;
    let boxHorizontalPosition = boxStyle.x.match(/(\d+)/);
    const newHorizontalPosition = Number(boxHorizontalPosition[0]) + offset;
    return String(newHorizontalPosition) + "px";
  };

  return (
    <div
      className={styles["pop-up"]}
      style={{
        "--left": calculateMenuHorizontalPosition(),
        "--top": boxStyle.y,
        "--visibility": boxStyle.isVisible ? "visible" : "hidden",
      }}
    >
      <ul>
        {characters.map((character) => (
          <li key={character}>{character}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharactersMenu;
