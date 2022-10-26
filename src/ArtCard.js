import React, {useState} from "react";
import { Link } from "react-router-dom";


function ArtCard({id, room, year, creator, country, title, image, art,details, onDelete}) {
    const [showDetails, setShowDetails] = useState(false)
    
    function handleClick() {
        setShowDetails((showDetails) => !showDetails);
      }

      function handleClickDelete() {
        fetch(`http://localhost:5000/arts/${id}`, {
          method: "DELETE",
        })
        .then((r) => r.json())
        .then(() => onDelete(art.id)
        );
        onDelete(art.id);
      }; 
      
    return (
        <li className="card">
          <img src={image} alt={title} />
          <h4>{title}</h4>
          <p>{room}</p>
          <p>{year}</p>
          <h4>{creator}</h4>
          <p>{country}</p>
          <button id="button1" className="emoji-button delete" onClick={handleClick}>Show Details</button>
          {showDetails ? <p>{details} </p> : null}
          <br />
          <button id="button2" className="emoji-button delete" onClick={handleClickDelete}>Delete</button>
          <br />
          <br />
          <Link to={`/art/${id}`}>See more</Link>
        </li>
      );
}

export default ArtCard;