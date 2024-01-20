import React, { useState } from "react";
import './App.css'

function App() {
  // state to store the name, hair color, and image from the API response
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [image, setImage] = useState("");
  const [species, setSpecies] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");

  // function to generate a random id between 1 and 88
  const generateRandomId = () => {
    return Math.floor(Math.random() * 88) + 1;
  };

  // function to fetch data from the API using a random id
  const fetchData = () => {
    // get a random id
    const id = generateRandomId();
    // construct the API url with the id
    const url = `https://akabab.github.io/starwars-api/api/id/${id}.json`;
    // make a GET request using fetch
    fetch(url)
      .then((response) => {
        // check if the response is ok
        if (response.ok) {
          // parse the response as JSON
          return response.json();
        } else {
          // throw an error
          throw new Error(`HTTP error: ${response.status}`);
        }
      })
      .then((data) => {
        // extract the name, hair color, and image from the data
        console.log(data)
       setData(data)
        const name = data.name;
        const hairColor = data.hairColor;
        const image = data.image;
        const species = data.species;
        const gender = data.gender;
        const height = data.height;
        // update the state with the name, hair color, and image
        setName(name);
        setHairColor(hairColor);
        setImage(image);
        setSpecies(species);
        setGender(gender);
        setHeight(height);
      })
      .catch((error) => {
        // handle the error
        console.error(error);
      });
  };

  return (
    <div className="App">
      <div className="container">
      <h1>Module 11</h1>
      <button onClick={fetchData}>Generate Details</button>
      { data ? (
      <div className="info-wrapper">
        <div className="Box-img">
      <img className="char-img" src={image} alt="Character image" />
      </div>
      <div className="Box-data">
      <p>Name = {name}</p>
      <p>Species = {species}</p>
      <p>Gender = {gender}</p>
      <p>Height = {height} m</p>
      <p>The hair color is = {hairColor ? hairColor : 'Not available'}</p>
      </div>
      </div>
      ) : ( <div></div> ) 
       }
       </div>
    </div>
  );
}

export default App;
