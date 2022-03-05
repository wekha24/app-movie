import React, {useEffect, useState} from 'react';
import axios from "axios";

const NewsView = (props) => {
    const [news, setNews] = useState({})

    useEffect(() =>{
        console.log(props)
        axios.get("https://jsonplaceholder.typicode.com/posts" + props.match.params.id)
            .then((res) =>{
                setNews(res.data)
            })
    }, [])



    return (
        <div className="container">
            <div className="row">

            </div>
        </div>
    );
};

export default NewsView;