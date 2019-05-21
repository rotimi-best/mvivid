import React from "react";
import { 
  Container, 
  Button,
  Row,
  Col
} from "reactstrap";
import { genRandNum } from "../../../modules";
import { RANDOM_AVATARS } from "../../../helpers/constants";

export default function Recommendation(props) {
  const { recommendations = [] } = props;
  
  const selectImage = name => {
    const i = genRandNum(0, RANDOM_AVATARS.USER_AVATAR.length - 1);
    const image = RANDOM_AVATARS.USER_AVATAR[i]
      .replace("--name--", name)
      .replace("--theme--", "heatwave");

    return RANDOM_AVATARS.USER_AVATAR[i];
  };

  return (
    <Container>
      <Row>
        <Col>
          <img src={selectImage("Ted Delker")} alt="Ted Delker"/>
          <h5>Ted Delker</h5>
          <p>February 5, 2019</p>
        </Col>
        <Col>
          <p>Boris Paskalev working with me on a thesis project using truck navigational and real-time wireless communication to demonstrate new models of doing business for the United States Postal Service. <br/>Boris was a standout MIT student creating a huge concept vehicle in such a short amount of time. He works independently and can build anything (mechanical, electrical, computer program). When a deadline is upon him He will work all night in the rain and can even enlist his girlfriend to help too!. </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={selectImage("Brad Collins")} alt="Brad Collins"/>
          <h5>Brad Collins</h5>
          <p>March 15, 2017</p>
        </Col>
        <Col>
          <p>He works collaboratively and loves to take direction towards a commonly agreed on goal He presents clearly. He treats people with respect and is inclusive. <br/>Boris was astounding at sourcing everything we needed, writing the code and making it happen. Boris is a master of procurement and responsible with money as well. My understanding is that he did not even compromise his other classes, social life or personal balance in doing the work. </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <img src={selectImage("Steve Jerry")} alt="Steve Jerry"/>
          <h5>Steve Jerry</h5>
          <p>February 5, 2019</p>
        </Col>
        <Col>
          <p>If I haven’t been clear enough, Boris has my highest recommendation as an engineer or scientist. He has the creativity and follows through to visualize, build test and present ideas in a shortest time of any student you will find. This is a very very special guy.</p>
        </Col>
      </Row>
    </Container>
  );
}