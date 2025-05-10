import { useState } from 'react'
import './App.css'
import {response} from "./Data.tsx";
import CharacterCard from "./CharacterCard.tsx";

function App() {
    const [characters] = useState(response.results)  // Storing character data. Using the mock data here
    const[searchCharacter, setSearchCharacter] = useState("")//state to store input
    const filteredCharacters =
        characters.filter((character) =>
            character.name.toLowerCase().includes(searchCharacter.toLowerCase())
    ); //character filterization applied and stored back

    return (
        <>
            {/* Input field to search characters */}
            <input onChange={(e)=>setSearchCharacter(e.target.value)}/> {/* Update searchCharacter*/}
            {filteredCharacters.map((character)=>
                <CharacterCard
                    key={character.id} //key should be on the root element, Key prop for efficient rendering
                    name ={character.name}
                    image = {character.image}
                />
            )}
            {/* Error message on no match */}
            {searchCharacter && filteredCharacters.length === 0  //searchCharacter → input is not empty and filteredCharacters.length === 0 → no match found
            && <p>Character not Found!</p>}
        </>
        //updated from characters.map to filteredCharacters.map  to display only the filtered characters based on the search input.
    );
}

export default App


//by this step we were, direct HTML rendering inside App.tsx
// CharacterCard used to display each character's name and image. and it can be called here
//previously when called directly example: {characters.map((character) => ( <div key={character.id}> <h3>{character.name}</h3> <img src={character.image} alt={character.name} /> </div> ))}