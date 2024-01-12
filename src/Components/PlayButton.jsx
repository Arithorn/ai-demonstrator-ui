import { useRef } from "react";
import { useRecoilValue } from "recoil";
import ReactAudioPlayer from "react-audio-player";
import { Button, Icon, Tab, Table } from "semantic-ui-react";
import config from "../config";
import { DeleteTTS } from "../Handlers/handleTTS";
import { loginState, jwtState } from "../State/state";

const PlayButton = (props) => {
  const { fname, message } = props.sound;
  const src = `${config.url}/mp3/${fname}`;
  const player = useRef();
  const audiofunction = () => {
    console.log(player);
    player.current.audioEl.current.play();
  };
  const token = useRecoilValue(jwtState);
  return (
    <Table.Row>
      <ReactAudioPlayer src={src} ref={player} />
      <Table.Cell singleLine>{message.substring(0, 40)}</Table.Cell>
      <Table.Cell>
        <Button onClick={audiofunction} icon>
          <Icon name="play"></Icon>
        </Button>
      </Table.Cell>
      <Table.Cell>
        <Button
          onClick={async (e) => {
            const data = { token, fname };
            console.log(data);
            await DeleteTTS(data);
            props.updateFunction();
          }}
          icon
        >
          <Icon name="user"></Icon>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export { PlayButton };
