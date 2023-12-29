import { useRef } from "react";
import ReactAudioPlayer from "react-audio-player";
import { Button, Icon, Table } from "semantic-ui-react";
import config from "../config";

const PlayButton = (props) => {
  const { fname, message } = props.sound;
  const src = `${config.url}/mp3/${fname}`;
  const player = useRef();
  const audiofunction = () => {
    console.log(player);
    player.current.audioEl.current.play();
  };
  console.log(props);
  return (
    <Table.Row>
      <ReactAudioPlayer src={src} ref={player} />
      <Table.Cell singleLine>{message}</Table.Cell>
      <Table.Cell>
        <Button onClick={audiofunction} icon>
          <Icon name="play"></Icon>
        </Button>
      </Table.Cell>
    </Table.Row>
  );
};

export { PlayButton };
