import {useParams} from "react-router-dom";

export default function CharacterDetailCard({characters}) {
    const {id} = useParams(); // Get the dynamic ID from the URL
    // Find the character that matches the ID from the URL
    const character = characters.find((char) => char.id === Number(id));
    return(
        <>
            {character?
                <>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
        </>
: (
        <p>Character not found!</p>
)}
        </>
    );
}