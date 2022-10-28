import React from "react";
import ArtCard from "./ArtCard";
import ArtForm from "./ArtForm";



function ArtRender({arts, onDelete}){
    const handleArts= arts.map((art) => (
        <ArtCard
        key={art.id}
        id={art.id}
        room={art.room}
        year={art.year}
        creator={art.creator}
        country={art.country}
        title={art.title}
        image= {art.image} 
        art={art}
        details={art.details}
        onDelete={onDelete}
      
        />
      ))
    
      return (
        <>
        <ul className="cards">{handleArts}</ul>
        </>
      );
    }

export default ArtRender;