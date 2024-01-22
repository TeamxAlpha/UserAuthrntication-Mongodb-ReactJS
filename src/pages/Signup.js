import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './css/comp.css';
import logoimg from './images/logo.png';    

function Signup() {
    const history = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    async function submit(e) {
        e.preventDefault();

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        try {
            const response = await axios.post("http://localhost:8000/signup", {
                name,
                email,
                password,
                age,
                gender
            });

            if (response.data === "exist") {
                alert("User already exists");
            } else if (response.data === "notexist") {
                history("/home", { state: { id: email, username: name } });
            }
        } catch (error) {
            alert("Error occurred while signing up");
            console.log(error);
        }
    }

    return (
        <div className="hero">
        <div className="login">
            <img alt="LogoIMG" className="logoimg" src={logoimg}></img>
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
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    title="Please enter a valid email address"
                    required
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
            <Link to="/" className="link">Login Page</Link>
        </div>
        </div>
    );
}

export default Signup;