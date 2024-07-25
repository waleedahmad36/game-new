import React, { useState } from 'react';


import './App.css';
import CharacterForm from './componets/CharacterForm.jsx';
import AttributeControl from './componets/AttributeControl.jsx';
import SkillAllocation from './componets/SkillAlocation.jsx';
import SkillCheck from './componets/SkillCheck.jsx';
import ClassDisplay from './componets/ClassDisplay.jsx';
import PartySkillCheck from './componets/PartySkillCheck.jsx';
import { CLASS_LIST } from './data/classes.jsx';

function App() {
  const [characters, setCharacters] = useState([]);
  const [selectedClass, setSelectedClass] = useState(null);

  const addCharacter = (character) => {
    setCharacters([...characters, character]);
  };

  return (
    <div className="App">
      <h1>RPG Character Sheet</h1>
      <CharacterForm addCharacter={addCharacter} />
      <div>
        {characters.map((char, index) => (
          <div key={index} className="character-section">
            <h2>Character {index + 1}</h2>
            <AttributeControl character={char} setCharacters={setCharacters} characters={characters} index={index}/>
            <SkillAllocation character={char} setCharacters={setCharacters} characters={characters} index={index}/>
            <SkillCheck character={char} />
          </div>
        ))}
      </div>
      <ClassDisplay classes={CLASS_LIST} setSelectedClass={setSelectedClass} />
      {selectedClass && (
        <div>
          <h2>Class Requirements</h2>
          <pre>{JSON.stringify(CLASS_LIST[selectedClass], null, 2)}</pre>
        </div>
      )}
      <PartySkillCheck characters={characters} />
    </div>
  );
}

export default App;
