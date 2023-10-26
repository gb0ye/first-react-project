import EditTImerModal from "./EditTimerModal";
import "./overlay.css";
import SetTimerModal from "./SetTimerModal";

function Overlay(props) {
   let className = "overlay " + props.className;

   return (

      <div className={className}>
         {props.modal === "setTimerModal" &&
               <SetTimerModal
                  closeOverlayFunc={props.closeOverlayFunc}
                  getNewTimer={props.getNewTimer}
               />
            }
            {props.modal === "EditTimerModal" &&
               <EditTImerModal closeOverlayFunc={props.closeOverlayFunc} removeEditTimerClass={props.removeEditTimerClass}></EditTImerModal>
            } 
      </div>
   );
}

export default Overlay;
