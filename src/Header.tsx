import {Link, useNavigate} from "react-router-dom";

export default function Header() {
    const nav = useNavigate() //useNavigate hook
    function gotoCharacters() { //function.  hidden in function
        nav("/characters")
    }
    //make another function if want for other navigation example:  function goHome()
    return(
       <>

           <h1>Rick and Morty App</h1>
       <Link to={"/"}>Greetings </Link>
           {/*Changed to button: <Link to={"characters"}>Character Gallery </Link>*/}

           <button onClick={gotoCharacters}>Characters</button>
       </>
    )
}
