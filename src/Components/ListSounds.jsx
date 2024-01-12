import { Navigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { Header, Table } from "semantic-ui-react";

import { loginState, jwtState } from "../State/state";
import { PlayButton } from "./PlayButton";

const ListSounds = (props) => {
  const token = useRecoilValue(jwtState);
  const login = useRecoilValue(loginState);
  if (login !== true) {
    return <Navigate replace to="/login" />;
  }
  const listItems = props.items.map((sound) => (
    <PlayButton sound={sound} updateFunction={props.updateFunction} />
  ));
  return (
    <div>
      <Table celled striped padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine>
              <Header>Message</Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header>Play</Header>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <Header>Delete</Header>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {listItems}
      </Table>
    </div>
  );
};
export default ListSounds;
