import React, { useState } from "react";
import { Button, Form, FormGroup, FormFeedback, Label, Input, FormText } from 'reactstrap';

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const [formFeedback, setFormFeedback] = useState({
    email: {
      type: "",
      text: ""
    },
    password: {
      type: "",
      text: ""
    }
  });

  const handleChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!form.email.trim().length) {
      setFormFeedback({
        ...formFeedback,
        email: {
          type: "-",
          text: "Email is required"
        }
      });
      return;
    }

    if (!form.password.trim().length) {
      setFormFeedback({
        ...formFeedback,
        password: {
          type: "-",
          text: "Password is required"
        }
      });
      return;
    }

    if (form.password.length < 5) {
      setFormFeedback({
        ...formFeedback,
        password: {
          type: "-",
          text: "Your password should be more than five characters"
        }
      });

      return;
    }

    console.log('Form submitted successfully', form);
      setFormFeedback({
        email: {
          type: "+",
          text: ""
        },
        password: {
          type: "+",
          text: "Successful"
        }
      });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          invalid={formFeedback.email.type === "-" ? true : false}
          valid={formFeedback.email.type === "+" ? true : false }
          type="email"
          name="email" 
          placeholder="Enter your email"
          value={form.email}
          onChange={handleChange}
        />
        <FormFeedback> {formFeedback.email.text} </FormFeedback>
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
        <Input
          invalid={formFeedback.password.type === "-" ? true : false}
          valid={formFeedback.password.type === "+" ? true : false }
          type="password"
          name="password"
          placeholder="Enter your password"
          value={form.password}
          onChange={handleChange}
        />
        <FormFeedback> {formFeedback.password.text} </FormFeedback>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}