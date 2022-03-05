import React, {useEffect, useState} from 'react';
import axios from "axios";

const Technology = () => {

    const [photos, setPhotos] = useState([])

    useEffect(() =>{
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then((res) =>{
                setPhotos(res.data)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {photos.map((item, index) =>{
                    return(
                        <div className="col-4 mt-3">

                            <div className="card">
                                <img src={item.url} className="w-100" alt="Error"/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default Technology;