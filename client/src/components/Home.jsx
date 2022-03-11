import React from "react";

const Home = () => {
    return (
        <div className="container" style={{border: "2px solid black"}}>
            <table className="table table-hover" style={{backgroundColor: "#EFFFFD",marginTop:"100px"}}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    )
}

export default Home