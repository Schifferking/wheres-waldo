import { useContext, useEffect, useRef, useState } from "react";
import useCharacterPositions from "./hooks/useCharacterPositions";
import { CableContext } from "../src/context/cable";
import "./App.css";
import ImageContainer from "./components/ImageContainer/ImageContainer";
import Stopwatch from "./components/Stopwatch/Stopwatch";
import BestScoreNameModal from "./components/BestScoreNameModal/BestScoreNameModal";
import HighScores from "./components/HighScores/HighScores";

function App() {
  const { characterPositions, error, loading } = useCharacterPositions();
  const cableContext = useContext(CableContext);
  const channelRef = useRef(null);
  const [stopwatchRunning, setStopwatchRunning] = useState(false);
  const [isBestScoreNameModalOpen, setBestScoreNameModalOpen] = useState(false);
  const [bestScoreFormData, setBestScoreFormData] = useState(null);
  const [bestScores, setBestScores] = useState(null);

  const handleOpenBestScoreNameModal = () => {
    setBestScoreNameModalOpen(true);
  };

  const handleAnonymousUsers = (data) => {
    if (data === "") {
      setBestScoreFormData({ name: "anonymous user" });
    }
  };

  const handleCloseBestScoreNameModal = (data = "") => {
    handleAnonymousUsers(data);
    setBestScoreNameModalOpen(false);
  };

  const handleFormSubmit = (data) => {
    setBestScoreFormData(data);
    handleCloseBestScoreNameModal(data);
  };

  useEffect(() => {
    channelRef.current = cableContext.cable.subscriptions.create(
      { channel: "TimeChannel" },
      {
        received: (data) => {
          if (data === "display modal") {
            handleOpenBestScoreNameModal();
          } else if (typeof data === "object") {
            // when receiving an array, store it in a state variable
            setBestScores(data);
          }
        },
      }
    );
    // and use channelRef.current.unsubscribe to end connection
  }, []);

  useEffect(() => {
    if (bestScoreFormData) {
      channelRef.current.send({ name: bestScoreFormData.name });
    }
  }, [bestScoreFormData]);

  if (error) return <p>A network error was encountered.</p>;
  if (loading) return <p>Loading...</p>;
  return (
    <div className="app-container">
      <h1>Just another "Where's Waldo?" app</h1>
      <Stopwatch stopwatchRunning={stopwatchRunning} />
      <ImageContainer
        characterPositions={characterPositions}
        setStopwatchRunning={setStopwatchRunning}
        channelRef={channelRef}
      />
      {
        <BestScoreNameModal
          isOpen={isBestScoreNameModalOpen}
          onSubmit={handleFormSubmit}
          onClose={handleCloseBestScoreNameModal}
        />
      }
      {bestScores && <HighScores bestScores={bestScores} />}
    </div>
  );
}

export default App;
