import './App.css'
import {Route, Routes} from "react-router-dom";
import Greetings from "./Greetings.tsx";
import CharacterGallery from "./CharacterGallery.tsx";
import Header from "./Header.tsx";
import { response } from './Data.tsx';
import CharacterDetailCard from "./CharacterDetailCard.tsx";

function App() {
    //using Route
    return(
        <>
        <Header/> {/*call header here*/}
    <Routes>
        <Route path ={"/"} element={<Greetings/>}/>
        <Route path={"characters"} element={<CharacterGallery/>}/> {/*CharacterGallery careated as seperate component and claled from here for better better structure and maintainability*/}
        <Route path={"/characters/:id"} element={<CharacterDetailCard characters={response.results}/>}/>  {/* */}
    </Routes>
        </>
    )}

export default App

/*
by this step we were, direct HTML rendering inside App.tsx
CharacterCard used to display each character's name and image. and it can be called here
previously when called directly example: {characters.map((character) => ( <div key={character.id}> <h3>{character.name}</h3> <img src={character.image} alt={character.name} /> </div> ))}
handleSearch: added handleSearch to update the search term in App and passed it to Searchbar.
 */