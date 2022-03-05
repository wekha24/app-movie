import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((res) =>{
                setNews(res.data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {news.map((item, index) =>{
                    return(
                        <div className="col-4 mt-3">
                            <div className="card">
                                <div className="card-body">
                                    <h4>{item.title}</h4>
                                    <Link to={"/news" + item.id}>more...</Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default News;