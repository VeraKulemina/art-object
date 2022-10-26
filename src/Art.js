import React, {useState, useEffect} from "react";
import ArtRender from "./ArtRender";
import ArtForm from "./ArtForm";




function Art(){
const [arts, setArts] = useState([]);

function handleAdd(newArt) {
    setArts([...arts, newArt]);
  }

 useEffect(() => {
    fetch("http://localhost:5000/arts")
    .then((r) => r.json())
    .then((arts) => setArts(arts));

 }, []);
 function handleDeleteArt(deletedArt){
    setArts(arts.filter((art) => art.id !== deletedArt));
 
   }

    return (
    <main>
         <div className="art">
            <br />
            <h1 className="h2">Art page</h1>
            <ArtRender arts={arts} onAddArt={handleAdd} onDelete={handleDeleteArt}/>
            <br />
         </div>
    </main>
    );
}
export default Art;