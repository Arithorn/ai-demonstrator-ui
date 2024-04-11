import {
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  GridColumn,
  Button,
} from "semantic-ui-react";
import { deleteJpg } from "../Handlers/handleJpg";
import { handleLogin } from "../Handlers/handleLogin";

const ImageCard = (props) => {
  const { src, prompt, fname } = props;
  const { token } = handleLogin("/images");
  return (
    <GridColumn>
      <Card>
        <Image as="a" src={src} wrapped ui={false} href={src} target="_blank" />
        <CardContent>
          <CardDescription>{prompt}</CardDescription>
          <Button
            floated="right"
            onClick={async (e) => {
              const data = { token, fname };
              const res = await deleteJpg(data);
              props.updateFunction(res);
            }}
            icon
          >
            <Icon name="delete"></Icon>
          </Button>
        </CardContent>
      </Card>
    </GridColumn>
  );
};

export { ImageCard };
