import React, { useEffect } from "react";
import { useState } from "react";

import { Navigate } from "react-router-dom";
import ListSounds from "../Components/ListSounds";
import HandleTTS from "../Handlers/handleTTS";
import TTSForm from "../Components/TTSForm";
import { loadTTS } from "../Loaders/loadTTS";
import { handleLogin } from "../Handlers/handleLogin";

const Sounds = () => {
  handleLogin("/sounds");
  const loadData = () => {
    const data = { token };
    loadTTS(data).then((response) => {
      response.reverse();
      setTTSList(response);
    });
  };
  const { isLoggedIn, token } = handleLogin("/sounds");
  const [ttslist, setTTSList] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  if (!isLoggedIn === true) {
    return <Navigate replace to="/login" />;
  }

  return (
    <div>
      Welcome To The Sound Page
      <TTSForm TTSHandler={HandleTTS} updateFunction={loadData} />
      <ListSounds items={ttslist} updateFunction={loadData} />
    </div>
  );
};

export default Sounds;
