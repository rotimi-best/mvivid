import React from 'react';
import { 
  Container, 
  Row,
  Col
} from "reactstrap";
import Recommendation from "./Recommendation"
import { genRandNum } from "../../../modules";
import { RANDOM_AVATARS } from "../../../helpers/constants";

import ProfileBanner from "../../../assets/profile/banner.jpeg";
import ProfileDp from "../../../assets/profile/dp.jpeg";
import "./css/index.css";

export default function PeopleProfile() {

  function selectImage(name, type) {
    let image = "";
    
    if (type === 'avatar') {
      const i = genRandNum(0, RANDOM_AVATARS.USER_AVATAR.length - 1);

      image = RANDOM_AVATARS.USER_AVATAR[i]
        .replace("--name--", name)
        .replace("--theme--", "heatwave");
    } else if (type === 'banner') {
      const i = genRandNum(0, RANDOM_AVATARS.USER_BANNER.length - 1);

      image = RANDOM_AVATARS.USER_BANNER[i]
        .replace("--name--", name)
        .replace("--theme--", "heatwave");
    }

    return image;
  };

  return (
    <Container className="ComponentBodyContainer">
      <div className="PeopleProfileHeader justify-content-center">
        <div className="banner" style={{ backgroundImage: `url(${ProfileBanner})` }}></div>
        <img src={ProfileDp} alt="Alina Glumenko"/>
        <h2 className="UserNameLong">Alina Glumenko</h2>
        <p className="UserNameShort">@alina</p>
        <p className="UserDescription">I am a teacher of english who you will like to work with.</p>
      </div>
      <div className="SkillSection">
          <div className="mx-auto SectionTitle">
            Skills
          </div>
          <Row className="SkillList">
            <Col><p>Programming</p></Col>
            <Col><p>Teaching</p></Col>
            <Col><p>Helping and assistance</p></Col>
          </Row>
      </div>
      {/* <div className="SkillSection">
        <div className="mx-auto SectionTitle">
          Recommendations
        </div>
        <Recommendation />
      </div> */}
    </Container>
  );
}