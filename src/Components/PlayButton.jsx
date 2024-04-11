import { useRef } from "react";
import { useRecoilValue } from "recoil";
import ReactAudioPlayer from "react-audio-player";
import { Button, Icon, Tab, Table } from "semantic-ui-react";
import config from "../config";
import { DeleteTTS } from "../Handlers/handleTTS";
import { loginState, jwtState } from "../State/state";
import { handleLogin } from "../Handlers/handleLogin";

const PlayButton = (props) => {
  const { fname, message } = props.sound;
  const src = `${config.url}/mp3/${fname}`;
  const player = useRef();
  const audiofunction = () => {
    player.current.audioEl.current.play();
  };
  const { token } = handleLogin("/tts");
  return (
    <Table.Row>
      <Table.Cell singleLine>{message.substring(0, 90)}</Table.Cell>
      <Table.Cell>
        <Button onClick={audiofunction} icon>
          <Icon name="play"></Icon>
        </Button>
      </Table.Cell>

      <Table.Cell>
        <ReactAudioPlayer src={src} ref={player} />
        <Button
          onClick={async (e) => {
            const data = { token, fname };
            const res = await DeleteTTS(data);
            props.updateFunction(res);
          }}
          icon
        >
          <Icon name="delete"></Icon>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export { PlayButton };
