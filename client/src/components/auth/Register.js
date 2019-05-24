import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// {
//   "fullName": "Jumoke Alakinde",
//   "description": "I am a hair dresser and love talking with people",
//   "userName": "jumoke_a",
//   "email": "jumoke_a@gmail.com",
//   "university": "Havard University",
//   "gender": "female",
//   "password": "jumoke9355",
//   "language": "english",
//   "country": "Ukraine",
//   "city": "Odessa",
//   "skills": []
// }

export default function Register() {
  // const [form, setForm] = useState({});

  return (
    <Form>
      <FormGroup>
        <Label for="fullname">Full Name</Label>
        <Input type="text" name="fullname" id="fullname" placeholder="Enter your fullname" />
      </FormGroup>
      <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="Enter a username" disabled/>
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input type="email" name="email" id="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input type="password" name="password" id="password" placeholder="Enter your password" />
      </FormGroup>
      <FormGroup tag="fieldset">
        <Label for="password">Gender</Label>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="female" />{' '}
              Female
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="male" />{' '}
              Male
            </Label>
          </FormGroup>
        </FormGroup>
      <FormGroup>
        <Label for="city">What skills do you have?</Label>
        <Input type="select" name="skills" id="skills">
          <option>Teaching</option>
          <option>Programming</option>
          <option>Drawing</option>
          <option>Helping</option>
          <option>Barbing</option>
          <option>Entertainer</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="university">Select a university</Label>
        <Input type="select" name="university" id="university">
          <option>Odessa National Polytechnic University</option>
          <option>Odessa National Medical University</option>
          <option>Kharkiv National Polytechnic University</option>
          <option>Kyiv National Medical University</option>
          <option>Dnipro National Polytechnic University</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="language">Select a Language</Label>
        <Input type="select" name="language" id="language">
          <option>English</option>
          <option>Russian</option>
          <option>French</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="country">Select a Country</Label>
        <Input type="select" name="country" id="country">
          <option>Ukraine</option>
          <option>Nigeria</option>
          <option>China</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="city">Select a City</Label>
        <Input type="select" name="city" id="city">
          <option>Odessa</option>
          <option>Kyiv</option>
          <option>Kharkiv</option>
        </Input>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}