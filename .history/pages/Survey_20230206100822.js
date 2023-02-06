import {useState} from "react"
import Start from "./Start"

export default function Survey() {
    const [name, setName] = useState("");
    const [isActive, setIsActiveOne] = useState(true);
    const[isActiveTwo, setIsActiveTwo] = useState(false)
    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : ''}}>

            </div>
        </div>
    )
}