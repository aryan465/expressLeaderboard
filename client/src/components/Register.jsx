import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink,useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [points, setPoints] = useState("")
    const [password, setpassword] = useState("")
    const [cpassword, setCpassword] = useState("")

    const handleRegister = async(e)=>{
        e.preventDefault();

        const res = await fetch("/register",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body:JSON.stringify({
                name:name,email:email,points:points,password:password,cpassword:cpassword
            })
        })

        console.log(res.headers)
        if(res.status !== 201 || !res){
            window.alert("Inavlid Input")
            console.log("Unsuccessful Registration")
            setEmail('')
        }
        else{
            window.alert("Registration Successfull! Login to continue")
            console.log("Registration Successfull")
            navigate("/signin")
        }

    }
    return (
        <section className="vh-90" style={{ marginTop: "25px", marginBottom: "10px" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11">
                        <div className="card text-black" style={{ "borderRadius": "25px" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p className="text-center h2 fw-bold mb-5 mx-1 mx-md-4 mt-4">Register</p>

                                        <form className="mx-1 mx-md-4" method="POST">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="text" id="form3Example1c" className="form-control" placeholder="Your Name"
                                                        value={name}
                                                        onChange={(e) => {
                                                            setName(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" id="form3Example2c" className="form-control" placeholder="Your Email"
                                                        value={email}
                                                        onChange={(e) => {
                                                            setEmail(e.target.value)
                                                        }} />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="number" id="form3Example3c" className="form-control" placeholder="Points"
                                                        value={points}
                                                        onChange={(e) => {
                                                            setPoints(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4c" className="form-control" placeholder="Password"
                                                        value={password}
                                                        onChange={(e) => {
                                                            setpassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="password" id="form3Example4cd" className="form-control" placeholder="Confirm password"
                                                        value={cpassword}
                                                        onChange={(e) => {
                                                            setCpassword(e.target.value)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <button type="button" className="btn btn-primary btn"
                                                onClick={handleRegister}
                                                >Register</button>
                                            </div>
                                            <p className="small fw-bold mt-2 pt-1 mb-0">Already have an account? <NavLink to="/signin"
                                                className="link-danger">Sign in</NavLink></p>
                                        </form>

                                    </div>
                                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Register" />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Register