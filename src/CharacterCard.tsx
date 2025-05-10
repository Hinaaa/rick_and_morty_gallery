type CharacterProps = {
    name: string;
    image:string;
}
export default function CharacterCard(props:Readonly<CharacterProps>) {
    return(
        <>
            <h2>{props.name}</h2>
            <img src = {props.image} alt={props.name}/>
        </>
    );
}
//this is created to display as many properties needed from data to display and can be styled
// It helps separate the logic of rendering each character from the main App component, means instead of direfctly writting logic to display characters its been don here by creating seperate component.
//additional UI/logic can be added
//reusable component if needed to be called by others.
//called in app.tsx