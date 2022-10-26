import React, {useState} from "react";

function ArtForm({onAddArt}) {
  const [title, setTitle] = useState("");
  const [creator, setCreator] = useState("");
  const [image, setImage] = useState([]);


  function handleSubmit(e) {
    e.preventDefault();
    const artData = {
      title: title,
      creator: creator,
      image: image,
   
    };
    fetch("http://localhost:5000/arts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artData),
  })
    .then((r) => r.json())
    .then((newArt) => onAddArt(newArt));
    setImage("");
    setCreator("");
    setTitle("");

}

    

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <br />
        <h1>Create Art Item!</h1>
        <input
          type="text"
          name="title"
          placeholder="Enter a art's title..."
          className="input-text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        
        <input
          type="text"
          name="creator"
          placeholder="Enter a creator here ..."
          className="input-text"
          value={creator}
          onChange={(e) => setCreator(e.target.value)}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Art Object"
          className="input-text"
        />
      </form>
    </div>
  );
}

export default ArtForm;
