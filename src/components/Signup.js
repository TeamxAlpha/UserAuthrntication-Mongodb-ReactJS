import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const history = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:8000/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/home", { state: { id: email } });
        }
      })
      .catch((e) => {
        alert("An error occurred. Please check your details and try again.");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="signup">
      <h1>Signup</h1>
      <form method="POST" onSubmit={submit}>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/">Login Page</Link>
    </div>
  );
}

export default Signup;
