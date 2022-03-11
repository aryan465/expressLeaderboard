import React from "react";
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from "react-router-dom";
const Page = () => {

    return (
        <>
            <div className="container" style={{
                displey: "flex",
                flexDirection: "column",
                marginTop: "20px"
            }}>
                <section className="px-md-5 mx-md-5 text-center dark-grey-text mb-4">

                    <img src="https://mdbootstrap.com/img/Others/404_mdb.png" alt="Error 404" className="img-fluid mb-3" /

                    >

                    <h3 className="font-weight-bold">Oops! This isn't a page you were looking for.</h3>

                    <p>Use the following link to navigate back to safe harbor.</p>

                    <NavLink className="btn btn-info btn-sm btn-rounded" to="/" role="button">Home Page</NavLink>

                </section>
            </div>
        </>
    )
}
export default Page