import { useState } from "react"
import "./MenuPage.css"

function MenuPage(props) {
    const [activeClass, addClassName] = useState(null)

    function addActiveClass(){
        addClassName(" active")
    }
    // function(a)
    return(
        <a href= "#" className={props.className + activeClass} onClick={addActiveClass}>{props.name}</a>
    )
}

export default MenuPage