import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
    const history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    async function submit(e) {
        e.preventDefault();

        try {
            await axios.post("http://localhost:8000/signup", {
                name,
                email,
                password,
                age,
                gender
            })
            .then((res) => {
                if (res.data === "exist") {
                    alert("User already exists");
                } else if (res.data === "notexist") {
                  history("/home", { state: { id: email, username: name } });
                }
            })
            .catch((e) => {
                alert("Wrong details");
                console.log(e);
            });

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="login">
            <h1>Signup</h1>
            <form action="POST">
                <input
                    type="text"
                    onChange={(e) => { setName(e.target.value) }}
                    placeholder="Name" 
                />
                <input
                    type="email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => { setPassword(e.target.value) }}
                    placeholder="Password"
                />
                <input
                    type="number"
                    onChange={(e) => { setAge(e.target.value) }}
                    placeholder="Age"
                />
                <input
                    type="text"
                    onChange={(e) => { setGender(e.target.value) }}
                    placeholder="Gender"
                />
                <input type="submit" onClick={submit} />
            </form>
            <br />
            <p>OR</p>
            <br />
            <Link to="/">Login Page</Link>
        </div>
    );
}

export default Login;
