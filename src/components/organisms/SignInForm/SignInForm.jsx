import { useState } from "react";

import { Button, FormInput } from "../../atoms";

import "./sign-in-form.styles.scss";
import {
  SignInAuthUserWithEmailAndPassword,
  authenticateWithGoogle,
} from "../../../utils/firebase";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formValues, setFormValues] = useState(defaultFormFields);
  const { email, password } = formValues;

  const resetFormFields = () => {
    setFormValues(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await authenticateWithGoogle();
  };

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await SignInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          break;
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Already have an account?</h1>
      <span className="form-description">
        Sign in with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          name="email"
          onChange={handleOnChange}
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          name="password"
          onChange={handleOnChange}
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
