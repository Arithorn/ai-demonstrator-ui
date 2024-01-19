import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  GridColumn,
  Button,
} from "semantic-ui-react";
import { useRecoilValue } from "recoil";
import { jwtState } from "../State/state";
import { deleteJpg } from "../Handlers/handleJpg";

const ImageCard = (props) => {
  const { src, prompt, fname } = props;
  const token = useRecoilValue(jwtState);
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
