type SearchbarProps = {
    searchCharacter:string //the current input value (controlled component)
    setSearchCharacter:(value:string) =>void // function to update
}
export default function Searchbar(props:Readonly<SearchbarProps>) {
    return (
        <>
            <input
            value={props.searchCharacter}
            onChange={(e) => props.setSearchCharacter(e.target.value)}  //Update searchCharacter
            />
        </>
        //updated from characters.map to filteredCharacters.map  to display only the filtered characters based on the search input.
    );
}

/*
Manages the input field for search.
Method passed as a prop: The setSearchCharacter method is passed from the parent (App.tsx) to update the state when the input changes.
Controlled component: The searchCharacter state is passed as a prop to set the value of the input.
 */