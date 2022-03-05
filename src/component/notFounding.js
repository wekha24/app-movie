import React from 'react';
import {Link} from "react-router-dom";


const NotFounding = () => {
    return (
        <div>
            <div className="container">
                <div className="row vh-100">
                    <div className="col-12">
                        <img src="/public/image/2022-02-22%2015.46.47.jpg" className="w-75" alt="Err"/>
                        <h4><Link to="/">Not found</Link> </h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFounding;