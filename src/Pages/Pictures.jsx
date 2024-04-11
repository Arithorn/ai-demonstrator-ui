import React, { useEffect } from "react";
import { useState } from "react";

import { Navigate } from "react-router-dom";
import { ListPictures } from "../Components/ListPictures";
import { PictureForm } from "../Components/PictureForm";
import { loadJpg } from "../Loaders/loadJpg";
import { handleJpg } from "../Handlers/handleJpg";
import { Container } from "semantic-ui-react";
import { handleLogin } from "../Handlers/handleLogin";

const Pictures = () => {
  const loadData = () => {
    const data = { token };
    loadJpg(data).then((response) => {
      response.reverse();
      setJpgList(response);
    });
  };
  const [jpgList, setJpgList] = useState([]);
  useEffect(() => {
    loadData();
  }, []);
  const { isLoggedIn, token } = handleLogin("/images");
  if (!isLoggedIn) {
    return <Navigate replace to="/login" />;
  } else
    return (
      <Container>
        Welcome To The Pictures Page
        <PictureForm JpgHandler={handleJpg} updateFunction={loadData} />
        <ListPictures items={jpgList} updateFunction={loadData} />
      </Container>
    );
};

export default Pictures;
