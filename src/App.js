import React, { useState } from "react";
import "./styles.css";

const animalDictionary = {
  "🙈": "See-No-Evil Monkey",
  "🦝": "Raccoon",
  "🐱": "Cat",
  "🐵": "Monkey Face",
  "🐶": "Dog Face",
  "🐺": "Wolf",
  "🦁": "Lion",
  "🙉": "Hear-No-Evil Monkey",
  "🦄": "Unicorn",
  "🐮": "Cow Face",
  "🐂": "Ox",
  "🐐": "Goat",
  "🐘": "Elephant",
  "🐇": "Rabbit",
  "🐼": "Panda",
  "🦇": "Bat",
  "🦘": "Kangaroo",
  "🐔": "Chicken",
  "🐧": "Penguin",
  "🦉": "Owl",
  "🦆": "Duck",
  "🦅": "Eagle",
  "🦜": "Parrot",
  "🐬": "Dolphin"
};

var animalWeKnow = Object.keys(animalDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function animalInputHandler(event) {
    var userInput = event.target.value;
    var meaning = animalDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Sorry! we don't have this in our database";
    }
    setMeaning(meaning);
  }

  function animalClickHandler(animal) {
    var meaning = animalDictionary[animal];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 className="heading">Know Animals </h1>
      <input
        onChange={animalInputHandler}
        placeholder="Enter the animal or select from the list given below."
      />
      <h2>{meaning}</h2>
      <h3 className="heading2 mb">Animals we know</h3>
      {animalWeKnow.map(function (animal) {
        return (
          <span
            onClick={() => animalClickHandler(animal)}
            style={{
              fontSize: "2rem",
              padding: "1.5rem",
              cursor: "pointer"
            }}
            key={animal}
          >
            {animal}
          </span>
        );
      })}
      <h1 className="heading">Animal Interpreter </h1>
    </div>
  );
}
