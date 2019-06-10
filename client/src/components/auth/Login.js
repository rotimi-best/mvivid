import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, FormFeedback, Label, Input, Alert } from 'reactstrap';
import { withRouter } from "react-router-dom";
import { login } from "../../redux/actions/authActions"
import { clearErrors } from "../../redux/actions/errorActions"
import { LOGIN_FAIL } from '../../redux/actions/types';

function Login(props) {
  // STATE HANDLER 
  // Form State
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  
  // Input's Error State
  const [formFeedback, setFormFeedback] = useState({
    email: {
      type: "",
      text: ""
    },
    password: {
      type: "",
      text: ""
    },
    submitError: "",
  });

  // LIFECYLE HANDLER
  useEffect(() => {
    console.log('useEffect:=> ',props);
    const { error, isAuthenticated } = props;

    if (error.id === LOGIN_FAIL) {
      console.log('Login error', error);
      const { msg: { message: submitError } } = error;

      setFormFeedback({
        ...formFeedback,
        submitError
      });
      
      props.clearErrors();
      setTimeout(() => {
        setFormFeedback({
          email: {
            type: "+",
            text: ""
          },
          password: {
            type: "+",
            text: ""
          },
          submitError: ""
        });
      }, 5000);
    } else if (isAuthenticated === true) {
      console.log('User is authenticated, redirect now');

      setFormFeedback({
        email: {
          type: "+",
          text: ""
        },
        password: {
          type: "+",
          text: "Successful"
        },
        submitError: "",
      });

      props.history.push('/jobs');
    }
  }, [formFeedback, props]);

  // FUNCTIONS
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

    const emptyChecker = !form.password.trim().length;
    const lengthChecker = form.password.length < 5;

    if (emptyChecker || lengthChecker) {
      const text = emptyChecker 
        ? "Password is required"
        : "Your password should be more than five characters";

      setFormFeedback({
        ...formFeedback,
        email: {
          type: "+",
          text: ""
        },
        password: {
          type: "-",
          text
        }
      });
      return;
    } else {
      setFormFeedback({
        ...formFeedback,
        email: {
          type: "+",
          text: ""
        },
        password: {
          type: "+",
          text: ""
        }
      });
    }

    // Submit Form
    props.login(form);
  }

  return (
    <Form onSubmit={handleSubmit}>
    { formFeedback.submitError ? (
      <Alert color="danger">{ formFeedback.submitError }</Alert>
    ) : null}
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

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
}

const mapStateToProp = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
})

export default connect(
  mapStateToProp, 
  { login, clearErrors }
)(withRouter(Login))
