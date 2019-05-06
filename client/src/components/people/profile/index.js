import React from 'react';
import { 
  Container, 
} from "reactstrap";
import { genRandNum } from "../../../modules";
import { RANDOM_AVATARS } from "../../../helpers/constants";
import "./css/index.css"

export default function PeopleProfile() {

  const selectImage = name => {
    const i = genRandNum(0, RANDOM_AVATARS.USER_AVATAR.length - 1);
    const image = RANDOM_AVATARS.USER_AVATAR[i].replace("${name}", name);

    console.log(image);
    return RANDOM_AVATARS.USER_AVATAR[i];
  };

  return (
    <Container className="ComponentBodyContainer">
      <section className="PeopleProfileHeader">
        <img src={selectImage("Alina Glumenkor")} alt="Alina Glumenko"/>
        <h5>Alina Glumenko</h5>
      </section>
    </Container>
  );
}