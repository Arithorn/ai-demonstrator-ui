import React, { useEffect } from "react";
import { useState } from "react";

import { Navigate } from "react-router-dom";
import { ListPictures } from "../Components/ListPictures";
import { PictureForm } from "../Components/PictureForm";
import { useRecoilValue } from "recoil";

import { loginState, jwtState } from "../State/state";
import { loadJpg } from "../Loaders/loadJpg";
import { handleJpg } from "../Handlers/handleJpg";
import { Container } from "semantic-ui-react";

const Pictures = () => {
  const loadData = () => {
    const data = { token };
    loadJpg(data).then((response) => {
      response.reverse();
      setJpgList(response);
    });
  };
  const token = useRecoilValue(jwtState);
  const login = useRecoilValue(loginState);
  const [jpgList, setJpgList] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  if (login !== true) {
    return <Navigate replace to="/login" />;
  }

  return (
    <Container>
      Welcome To The Pictures Page
      <PictureForm JpgHandler={handleJpg} updateFunction={loadData} />
      <ListPictures items={jpgList} updateFunction={loadData} />
    </Container>
  );
};

export default Pictures;
