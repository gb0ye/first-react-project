import React from "react";
import "./EditTimerModal.css";
function EditTImerModal(props) {

   function closeEditOverlayHandler() {
      props.closeOverlayFunc();
      props.removeEditTimerClass();
   }

   return (
      <div className="edit-modal-container">
         <button onClick={closeEditOverlayHandler}>&#10003;</button>
      </div>
   );
}

export default EditTImerModal;
