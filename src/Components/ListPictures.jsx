import { Navigate } from "react-router-dom";

import { Grid } from "semantic-ui-react";

import config from "../config";
import { ImageCard } from "./imageCard";
import { handleLogin } from "../Handlers/handleLogin";
// import { PlayButton } from "./PlayButton";

const ListPictures = (props) => {
  const { token, isLoggedIn } = handleLogin("/images");
  if (!isLoggedIn === true) {
    return <Navigate replace to="/login" />;
  }

  const listItems = props.items.map((image, index) => (
    <ImageCard
      src={`${config.url}/jpg/${image.fname}`}
      prompt={image.prompt}
      fname={image.fname}
      updateFunction={props.updateFunction}
      key={index}
    />
  ));
  return (
    <Grid relaxed columns={4}>
      {listItems}
    </Grid>
  );
};
export { ListPictures };
