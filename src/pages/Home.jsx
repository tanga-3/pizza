import React, {useState} from "react";
import "./../home.css";
import { useHistory } from "react-router-dom";

const creds = { login: "admin", password: "password" };

const Home = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  
  const history = useHistory();

  const submitHandler = (event) => {
    event.preventDefault();
    if (login === creds.login && password === creds.password) {
      history.push("/products");
      localStorage.setItem("user", JSON.stringify({ login: login }));
    } else {
      setError(true);
    }
  };

  return (
    <div className="container">
      <div className="homeImage"></div>
      <div className="rightPanel">
        <div className="rightPanelInnerContainer">
          <form id="login-form">
            {error ? (
              <h2 id="try-again" className="try">
                The email or password is incorrect, <br /> try again, please
              </h2>
            ) : (
              <h1 id="login-title">Login</h1>
            )}
            <input
              type="text"
              className="login"
              name="login"
              placeholder="Username"
              onInput = {(event) => setLogin(event.target.value)}
            />
            <input
              type="password"
              className="password"
              name="password"
              placeholder="Password"
              onInput = {(event) => setPassword(event.target.value)}
            />
            <button onClick={submitHandler} type="submit" className="contained login">
              LOGIN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
