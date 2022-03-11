import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink,useNavigate } from 'react-router-dom'


const Signin = () => {

    const navigate = useNavigate()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleSignin = async(e)=>{
        e.preventDefault();

        const loginRes = await fetch("/signin",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                email:email,password:password
            })
        })


        if(loginRes.status !== 200 || !loginRes){
            if(loginRes.status>=500){
                alert("Server Timeout")
            }
            else
            {window.alert("Inavlid Credentials")
            console.log("Inavlid Credentials")
            setEmail('')
            setPassword('')}
        }
        else{
            window.alert("Login Successfull")
            console.log("Login Successfull")
            navigate("/")
        }

    }
    return (
        <section className="vh-90" style={{marginTop:"70px"}}>
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid"
                            alt="Signin"/>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <form method="POST">
                            

                        <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign in</p>


                            <div className="form-outline mb-4">
                                <input type="email" id="form3Example3" className="form-control form-control-md"
                                    value={email}
                                    onChange={(e)=>{
                                        setEmail(e.target.value)
                                    }} />
                                <label className="form-label" htmlFor="form3Example3">Email address</label>
                            </div>

                            <div className="form-outline mb-3">
                                <input type="password" id="form3Example4" className="form-control form-control-md"
                                     value={password}
                                         onChange={(e)=>{
                                             setPassword(e.target.value)
                                         }}
                                     />
                                <label className="form-label" htmlFor="form3Example4">Password</label>
                            </div>

                           

                            <div className="text-center text-lg-start mt-4 pt-2">
                                <button type="button" className="btn btn-primary btn"
                                    style={{paddingLeft: "2.5rem", paddingRight: "2.5rem"}}
                                    onClick={handleSignin}
                                    >Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-10">Don't have an account? <NavLink to="/register"
                                    className="link-danger">Register</NavLink></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
            
        </section>
    )
}

export default Signin