    import {useState} from "react";
    import {response} from "./Data.tsx";
    import Searchbar from "./Searchbar.tsx";
    import CharacterCard from "./CharacterCard.tsx";

    export default function CharacterGallery() {
        const [characters] = useState(response.results)  // Storing character data. Using the mock data here
        const[searchCharacter, setSearchCharacter] = useState("")//state to store input
        const filteredCharacters =
            characters.filter((character) => //character filterization applied and stored back
                character.name.toLowerCase().includes(searchCharacter.toLowerCase())
            );

        //new function handleSearch
        function handleSearch(value: string) {
            setSearchCharacter(value); // to updates searchCharacter state
        }
        return (
            <>
                <Searchbar
                    searchCharacter={searchCharacter} // Passed current search term (controlled input)
                    handleSearch={handleSearch} // Passed handleSearch function to update state
                />
                {/* Input field to search characters */}
                {/*<input onChange= this function moved from here. Update searchCharacter*/}
                {filteredCharacters.map((character)=>
                    <CharacterCard
                        key={character.id} //key should be on the root element, Key prop for efficient rendering
                        id = {character.id} //for navigation
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