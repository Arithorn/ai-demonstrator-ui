import React, { useEffect } from "react";
import { useState } from "react";

import { Navigate } from "react-router-dom";
import ListSounds from "../Components/ListSounds";
import HandleTTS from "../Handlers/handleTTS";
import TTSForm from "../Components/TTSForm";
import { useRecoilValue } from "recoil";

import { loginState, jwtState } from "../State/state";
import loadTTS from "../Loaders/loadTTS";

const Sounds = () => {
  const loadData = () => {
    const data = { token };
    loadTTS(data).then((response) => {
      response.reverse();
      setTTSList(response);
    });
  };
  const token = useRecoilValue(jwtState);
  const login = useRecoilValue(loginState);
  const [ttslist, setTTSList] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  if (login !== true) {
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
