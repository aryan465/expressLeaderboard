import React, { useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css'

const Profile = () => {

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

            // const data = await

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        callProfile()
    }, [])
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
                    ><h3>Aryan Anand</h3></div>
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
                            color: "#395B69"
                        }}>
                            <ul style={{ listStyle: "none" }}>
                                <li>User_id</li>
                                <li>Email</li>
                                <li>Points</li>
                            </ul>
                        </div>
                        <div className="container" style={{
                            // border: "1px solid black",
                            color: "#113CFC",
                        }}>
                            <ul style={{
                                listStyle: "none",
                            }}>
                                <li>15sxbhbhd1548</li>
                                <li>name@example</li>
                                <li>1000</li>
                            </ul>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Profile