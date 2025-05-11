import {useNavigate} from "react-router-dom";

export default function CharacterCard({id,name,image}) {
    const navigates = useNavigate(); //hook
    //<button onClick={cardClick}>Redirect to Character</button>

    function handleCardClick() {
        navigates(`/characters/${id}`)
    }
    return(
        <>
            <button onClick={handleCardClick}>Redirect to Character</button>
            <h2>{name}</h2>
            <img src = {image} alt={name}/>
        </>
)
}
//this is created to display as many properties needed from data to display and can be styled
// It helps separate the logic of rendering each character from the main App component, means instead of direfctly writting logic to display characters its been don here by creating seperate component.
//additional UI/logic can be added
//reusable component if needed to be called by others.
//called in app.tsx
/*
Props passed: name and image are passed from the parent (App.tsx) to render each character.
 with props:
   <h2>{props.name}</h2>
   <img src = {props.image} alt={props.name}/>
            */