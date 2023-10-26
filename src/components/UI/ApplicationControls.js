import "./ApplicationControls.css";
function ApplicationControls(props) {
   return (
      <div className="application-controls">
         {props.buttons.map((btn, index) => {
            return (
               <button key={index} onClick={btn.onClick} className={btn.className}>
                  {btn.name}
               </button>
            );
         })}
        </div>
   );
}

export default ApplicationControls;
