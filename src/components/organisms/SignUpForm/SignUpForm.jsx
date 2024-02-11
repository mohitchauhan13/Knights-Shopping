import { useState } from "react";
import {
  authenticateWithEmailAndPassword,
  createUserInDB,
} from "../../../utils/firebase";
import { Button, FormInput } from "../../atoms";

const initialValues = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formValues, setFormValues] = useState(initialValues);
  const { displayName, email, password, confirmPassword } = formValues;

  const handleOnChange = (event) => {
    const { name, value } = event.target;

    setFormValues({ ...formValues, [name]: value });
  };

  const resetFormFields = () => {
    setFormValues(initialValues);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const response = await authenticateWithEmailAndPassword(email, password);
      await createUserInDB({ ...response.user, displayName });

      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Don't have an account?</h1>
      <span className="form-description">
        Sign up with your email and password
      </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          name="displayName"
          onChange={handleOnChange}
          value={displayName}
        />
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
          onChange={handleOnChange}
          name="password"
          value={password}
        />
        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleOnChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
