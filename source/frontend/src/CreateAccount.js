import React from 'react';
import { useState } from 'react';
import Eye from './Eye.png';
// import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

export default function CreateAccount(props) {
    document.title = props.title;
    let history = useHistory()
    const [value, setvalue] = useState("");
    const [username, setusername] = useState("")
    const [fname, setfname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [mobile, setmobile] = useState("")

    let showpassword = () => {
        let password = document.getElementById("signUpPassword");
        // console.log(password);
        if (password.type === "password") {
            password.type = "text";
        }
        else {
            password.type = "password";
        }
    }

    let handleUserName = (event) => {
        setusername(event.target.value)
    }

    let handlePassword = (event) => {
        setpassword(event.target.value)    
    }

    let handleFname = (event) => {
        setfname(event.target.value)   
    }

    let handleEmail = (event) => {
        setemail(event.target.value)
        
    }

    let handleMobile = (event) => {
        setmobile(event.target.value)
        
    }

    let handleSubmit = async (event)=>{
        event.preventDefault()
        const response = await fetch("http://localhost:5000/api/auth/create",
            {
                method: "POST",
                headers:{'Content-Type': 'application/json'},
                body: JSON.stringify({
                    username: username, 
                    password: password, 
                    fname:fname, 
                    email: email,
                    mobile: mobile,
                })
            }
        )

        const json = await response.json()
            if(json.success)
                {
                alert("New account created sucessfully")
                history.push('/login')
                }
            else{
                alert(json.error)
            }

    }

    return (
        <>
            <form onSubmit = {handleSubmit}>
                <div id="signup">
                    <div className="signUpItems">
                        <h1 >Create Account</h1>
                        <div className="items">
                            <input type="text" name="fname" placeholder="Firstname" value = {fname} onChange = {handleFname}/>
                        </div>
                       
                        <div className="items">
                            <input type="text" name="mobile" placeholder="Mobile Number" value = {mobile} onChange = {handleMobile}/>
                        </div>
                        <div className="items">
                            <input type="email" name="email" placeholder="Email Address" value = {email} onChange = {handleEmail}/>
                        </div>
                       
                        <div className="items">
                            <input type="text" name="username" value = {username} id="signUpUsername" placeholder="Username" onChange={handleUserName} />
                        </div>
                        <div className="items">
                            <input type="password" name="password" placeholder="Password" id="signUpPassword" onChange={handlePassword} value = {password}/>
                            <div id="signupEyeImg">
                                <img src={Eye} alt="" onClick={showpassword} />
                            </div>
                        </div>
                        <div className="items">
                            {/* <Link id="signUpCreate" to={(value.length >= 8 && creds.username !== " ") ? "/Backend" : "/createAccount"}>Create Account</Link> */}
                            <button id="signUpCreate" type = "submit">Create Account</button>
                        </div>
                        <div id="signUpInvalid" className="items">

                        </div>
                    </div>
                </div>
            </form>
        </>
    )

}