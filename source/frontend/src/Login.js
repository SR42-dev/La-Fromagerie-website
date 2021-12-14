import { Link } from 'react-router-dom';
import Eye from './Eye.png';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function Login(props) {

    let history = useHistory()

    document.title = props.title;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let showpassword = () => {
        let password = document.getElementById("loginPassword");
        console.log(password);
        if (password.type === "password") {
            password.type = "text";
        }
        else {
            password.type = "password";
        }
    }

    let handleUserName = (event) => {
        setUsername(event.target.value);
    }

    let handlePassword = (e)=>{
        setPassword(e.target.value)
    }

    let handleSubmit = async (event)=>{
        event.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/login",
            {
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({username: username, password:password})//to convert the response from json format inton string format
            }
        )

        const json = await response.json()
        if(json.success)
            {
                console.log(json)
                localStorage.setItem('authToken', json.authtoken)//to store teh token in local storage
                alert("You have logged in sucessfully")
                history.push('/')
            }
        else{
            alert("Enter valid username and password")
        }
    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <div id="Login">
                    <div className="loginBox">
                        <div className="loginInputs">
                            <h1 id="loginMainHeading">Welcome Back</h1>
                            <h4 id="loginSubHeading">Enter your crendentials to acces your account</h4>
                            <div>
                                <input type="text" name="username" value = {username} placeholder="Enter username" id="loginUsername" required onChange={handleUserName} />
                            </div>
                            <div>
                                <abbr title="Show Password">
                                    <div id="loginEye">
                                        <img src={Eye} alt="" onClick={showpassword} />
                                    </div>
                                </abbr>

                                <div>
                                    <input type="password" name="password" value = {password} placeholder="Enter password" id="loginPassword" min="8" required onChange={handlePassword} />
                                </div>
                            </div>

                            <div>
                                <button type = "submit" id="submit-login">LogIn</button>
                            </div>

                            <div id="loginInvalid"></div>
                            <div id="login-signup">
                                Don't have an account yet?<br />
                                <Link id="create" to="/createAccount" role = "button">Create account</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </form>
        </>
    )
}