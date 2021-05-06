import "./SignIn.css";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Alert from '@material-ui/lab/Alert';
import Fade from '@material-ui/core/Fade';

const SignIn = () => {

  let history = useHistory();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [showFlash, setShowFlash] = useState(null);
  const [flash, setFlash] = useState({
      severity: '',
      message: '',                                  
  })

  const displayFlashMessage = () => {
    setShowFlash(true)
    setTimeout(() => {
    setShowFlash(false);
    }, 5000);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: `${values.username}`,
        password: `${values.password}`,
      }),
    });

    if (res.status === 200) {
      displayFlashMessage();
      setFlash({
          message: `Success! ${values.username} is logged in`,
          severity:'success'
        })
      localStorage.setItem('loggedIn', true)
      window.setTimeout(() => {
        history.push('/dashboard')
      }, 5000)
    } else {
      console.log(`Error: Unable to log ${values.username} in`);
    }
  };

  return (
    <div>
      { 
        showFlash
        ? (
            <Fade in={showFlash} timeout={{ enter: 300, exit: 1000 }}>
                <Alert className="alert" severity={flash.severity}>{flash.message}</Alert>
            </Fade>
            )
        : null 
      }
      <div className="sign-in-container">
        <div className="form">
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="username"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
            <input type="submit" value="Sign In" />
          </form>
          <div className="redirect-container">
            <p>
              Don't already have an account?<br></br>
              <Link to="/sign-up">Sign up</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
