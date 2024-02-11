import { SignUpForm, SignInForm } from "../../components/organisms";
import "./authentication.styles.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
    </div>
  );
};

export default Authentication;
