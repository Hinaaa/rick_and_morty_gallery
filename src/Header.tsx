import {Link} from "react-router-dom";

export default function Header() {
    return(
       <>
           <h1>Rick and Morty App</h1>
       <Link to={"/"}>Greetings </Link>
        <Link to={"characters"}>Character Gallery </Link>
       </>
    )
}
