import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Header, Table, Image, Grid } from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";
import config from "../config";
import { ImageCard } from "./imageCard";
// import { PlayButton } from "./PlayButton";

const ListPictures = (props) => {
  const token = useRecoilValue(jwtState);
  const login = useRecoilValue(loginState);
  if (login !== true) {
    return <Navigate replace to="/login" />;
  }

  const listItems = props.items.map((image) => (
    <ImageCard src={`${config.url}/jpg/${image.fname}`} prompt={image.prompt} />
  ));
  return (
    <Grid relaxed columns={4}>
      {listItems}
    </Grid>
  );
};
export { ListPictures };
