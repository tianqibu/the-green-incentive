import "./SignIn.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="sign-in-container">
      <div className="form">
        <h1>Sign In</h1>
        <form>
          <input type="email" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign In" />
        </form>
        <div className="redirect-container">
          <p>
            Don't already have an account?
            <br />
            <Link to="/sign-up">Sign up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
