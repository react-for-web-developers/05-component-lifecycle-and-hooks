import "bulma/css/bulma.css";
import { useEffect, useState } from "react";
import Input from "./components/Input";
import Columns from "./components/Columns";

import { fetchDigimons, fetchDigimonsByLevel } from "./lib/index";

const useEffectDigimonList = (setLoading, setMessage) => {
  const [digimonList, setDigimonList] = useState([]);

  async function getDigimons() {
    setLoading(true);
    setMessage("");
    const data = await fetchDigimons();
    setDigimonList(data);
    setLoading(false);
  }

  async function getDigimonsByLevel(level) {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetchDigimonsByLevel(level);
      setDigimonList(response.data);
    } catch (error) {
      setDigimonList([]);
      setMessage(error.response.data.ErrorMsg);
    }
    setLoading(false);
  }
  return [digimonList, getDigimons, getDigimonsByLevel];
};

export default function App() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [label, setLabel] = useState("");
  const [digimons, getDigimons, getDigimonsByLevel] = useEffectDigimonList(
    setLoading,
    setMessage
  );

  function filterDigimons(level) {
    if (level.trim()) {
      getDigimonsByLevel(level);
    } else {
      getDigimons();
    }
  }

  useEffect(() => {
    getDigimons();
  }, []);

  useEffect(() => {
    const levels = digimons.map(({ level }) => level);
    const uniqueLevels = [...new Set(levels)];
    setLabel(uniqueLevels.join(", "));
  }, [digimons]);

  return (
    <>
      <div className="container px-4 py-2">
        <Input filterDigimons={filterDigimons} />
        <p className="subtitle is-5">{label}</p>
        {loading && (
          <progress className="progress is-small is-dark" max={100}></progress>
        )}
        <p className="subtitle is-5 has-text-danger-dark">
          {message && message}
        </p>

        <Columns digimons={digimons} />
      </div>
    </>
  );
}
