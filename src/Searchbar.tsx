type SearchbarProps = {
    searchCharacter:string //the current input value (controlled component)
   // setSearchCharacter:(value:string) =>void // function to update
    //passing handleSearch instead of setSearchCharacter
    handleSearch:(value:string) => void; // function to update search term
}

export default function Searchbar(props:Readonly<SearchbarProps>) {
    return (
        <>
            <input
            value={props.searchCharacter}
            onChange={(e) => props.handleSearch(e.target.value)}  //Update searchCharacter. handleSearch used to update searchCharacter
            />
        </>
    );
}

/*
Manages the input field for search.
Method passed as a prop: The setSearchCharacter method is passed from the parent (App.tsx) to update the state when the input changes.
Controlled component: The searchCharacter state is passed as a prop to set the value of the input.
 setSearchCharacter replaced by handleSearch: Parent function updates searchCharacter and is passed to Searchbar for cleaner abstraction.
updated from characters.map to filteredCharacters.map  to display only the filtered characters based on the search input.
*/