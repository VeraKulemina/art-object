import React, {useState, useEffect} from "react";
import ArtRender from "./ArtRender";
import Search from "./Search";




function Art(){
const [arts, setArts] = useState([]);
const [searchTerm, setSearchTerm] = useState("");


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
   const searchArt = arts.filter((art)  =>
  art.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

    return (
    <main>
         <div className="art">
            <br />
            <h1 className="h2">Art page</h1>
            <Search setSearchTerm={setSearchTerm} searchTerm={searchTerm}/>
            <ArtRender arts={searchArt} onAddArt={handleAdd} onDelete={handleDeleteArt}/>
            <br />
         </div>
    </main>
    );
}
export default Art;