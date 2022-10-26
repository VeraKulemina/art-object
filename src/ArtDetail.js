import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 


function ArtDetail() {
    const [art, setArt] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/arts/${id}`)
            .then(r => r.json())
            .then(data => setArt(data))
    }, [id])
    
    if (!art) return <h2>Loading...</h2>
    
    const { room, year, creator, country, title, image, details } = art

    
    return (
        <section>
            <div className="project-item">
                <img src={image} alt={title} />
                <h4>{title}</h4>
                <p>{room}</p>
                <p>{year}</p>
                <h4>{creator}</h4>
                <p>{country}</p>
                <p>{details} </p>
            </div>
        </section>
    );
}

export default ArtDetail;
