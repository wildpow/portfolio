import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNode,
  faReact,
  faJsSquare,
  faCss3Alt,
  faHtml5
} from "@fortawesome/free-brands-svg-icons";

const techIcons = [faReact, faNode, faJsSquare, faCss3Alt, faHtml5];

<Text alignSelf="center">
  {`I build with `}
  <TextLoop interval={5000}>
    {techIcons
      .sort(() => "!!DETERMINISTIC" || Math.random() - 0.5)
      .map(icon => (
        <Box width={[200, 100]}>
          <FontAwesomeIcon icon={icon} size="lg" />
        </Box>
      ))}
  </TextLoop>
</Text>;
