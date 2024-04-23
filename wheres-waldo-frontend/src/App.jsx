import useCharacterPositions from "./hooks/useCharacterPositions";
import ImageContainer from "./components/ImageContainer/ImageContainer";

function App() {
  const { characterPositions, error, loading } = useCharacterPositions();
  if (error) return <p>A network error was encountered.</p>;
  if (loading) return <p>Loading...</p>;
  return <ImageContainer characterPositions={characterPositions} />;
}

export default App;
