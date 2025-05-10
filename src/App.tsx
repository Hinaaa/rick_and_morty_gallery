import { useState } from 'react'
import './App.css'
import {response} from "./Data.tsx";
import CharacterCard from "./CharacterCard.tsx";

function App() {
    const [characters] = useState(response.results)  // Storing character data. Using the mock data here
    return (
        <>
            {characters.map((character)=>
                <CharacterCard
                    key={character.id} //key should be on the root element, Key prop for efficient rendering
                    name ={character.name}
                    image = {character.image}
                />
            )}
        </>
    );
}

export default App


//by this step we were, direct HTML rendering inside App.tsx
// CharacterCard used to display each character's name and image. and it can be called here
//previosly when called diretcly exmaple: {characters.map((character) => ( <div key={character.id}> <h3>{character.name}</h3> <img src={character.image} alt={character.name} /> </div> ))}