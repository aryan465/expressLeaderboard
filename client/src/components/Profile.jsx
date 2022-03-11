import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'
import {useNavigate} from 'react-router-dom'

const Profile = () => {
    const[userData,setUserData] = useState();
    const navigate = useNavigate();
    const callProfile = async () => {
        try {
            const res = await fetch('./profile',{
                method:"GET",
                headers:{
                    Accept: "application/json",
                    "Content-Type" : "application/json"
                },
                credentials:"include"
            })

            const data = await res.json();
            setUserData(data)

            if(res.status!==200){
                const err = new Error(res.error)
                throw err;

            }
            
        } catch (error) {
            console.log(error)
            navigate("/")
            // window.alert("Login to view profile")
        }
    }

    useEffect(() => {
        callProfile();
    }, [])


    if(userData===undefined){
        return(
            <>Profile</>
        )
    }
    else{

    
    return (
        <div className="container">
            <div className="container emp-profle"
                style={{
                    borderRadius: "10px",
                    height: "35vh",
                    marginTop: "10vh",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                    background: "#f8f9fa"

                }}
            >
                <form method="GET">
                    <div className="profile-head"
                        style={{
                            margin: "15px 0 5px 20px"
                        }}
                    ><h3>{userData.name}</h3></div>
                    <hr className="my-4"></hr>


                    <div className="container" style={{
                        // border: "1px solid cyan",
                        display: "flex",
                        flexDirection: "row",
                        fontSize: "1.05em",
                        fontWeight: "500"

                    }}>
                        <div className="container" style={{
                            // border: "1px solid black",
                            color: "#395B69",
                            width:"30%",
                            paddingLeft:"0"
                        }}>
                            <ul style={{ 
                                listStyle: "none",
                                paddingLeft:"5px"
                             }}>
                                <li>User_id</li>
                                <li>Email</li>
                                <li>Points</li>
                            </ul>
                        </div>
                        <div className="container" style={{
                            // border: "1px solid black",
                            color: "#113CFC",
                            paddingLeft:"0"

                        }}>
                            <ul style={{
                                listStyle: "none",
                                paddingLeft:"10px"
                            }}>
                                <li>{userData._id}</li>
                                <li>{userData.email}</li>
                                <li>{userData.points}</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
}
export default Profile