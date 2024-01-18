import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
  Icon,
  Image,
  GridColumn,
} from "semantic-ui-react";

const ImageCard = (props) => {
  const { src, prompt } = props;
  return (
    <GridColumn>
      <a href={src} target="_blank">
        <Card>
          <Image src={src} wrapped ui={false} />
          <CardContent>
            <CardDescription>{prompt}</CardDescription>
          </CardContent>
        </Card>
      </a>
    </GridColumn>
  );
};

export { ImageCard };
