import {useState} from "react"
import Start from "./Start"

export default function Survey() {
    const [name, setName] = useState("");
    const [isActiveOne, setIsActiveOne] = useState(true);
    const[isActiveTwo, setIsActiveTwo] = useState(false)

    const passName = (event) => {
        
    }
    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}}>
                <h1>What is your name?</h1>
                <input
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Enter name"
                    onKeyDown={passName}
                    type="text"
                />

            </div>
            <div style={{display: isActiveTwo ? 'block': 'none'}}>

            </div>
        </div>
    )
}