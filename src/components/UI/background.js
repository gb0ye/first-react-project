import "./background.css"
function Background(props){
    const className = "background " + props.className
    return(
        <div className={className}>{props.children}</div>
    )
}
export default Background