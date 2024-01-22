import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import './css/comp.css';
import logoimg from './images/logo.png';

function Login() {
      
    const history = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function submit(e) {
        e.preventDefault();

        try {
            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address");
                return;
            }

            await axios.post("http://localhost:8000/", {
                email, password
            })
            .then(res => {
                if (res.data === "exist") {
                    history("/home", { state: { id: email} })
                }
                else if (res.data === "notexist") {
                    alert("User has not signed up");
                }
            })
            .catch(e => {
                alert("Wrong details");
                console.log(e);
            });

        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="hero">
        <div className="login">
            <img alt="logoimg" className="logoimg" src={logoimg}></img>
            <h1>Login</h1>
            <form action="POST">
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
                    required
                />
                <input type="submit" onClick={submit} />
            </form>
            <br/>
            <p>OR</p>
            <br/>
            <Link to="/signup" className="link">Signup Page</Link>
        </div>

        </div>
    )
}

export default Login;