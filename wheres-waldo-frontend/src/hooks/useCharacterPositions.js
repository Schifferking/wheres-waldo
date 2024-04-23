import { useState, useEffect } from "react";

const useCharacterPositions = () => {
  const [characterPositions, setCharacterPositions] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/character_positions", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("server error");
        }

        return response.json();
      })
      .then((data) => setCharacterPositions(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { characterPositions, error, loading };
};

export default useCharacterPositions;
