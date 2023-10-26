import "./SetTimerModal.css"
function SetTimerModal(props) {
    function getNewTimer() {
       const hours = document.querySelector(".hours").value;
       const minutes = document.querySelector(".minutes").value;
       const seconds = document.querySelector(".seconds").value;
       const timerName = document.querySelector(".set-timer-name").value;
       props.getNewTimer({
          randId:Math.random(),
          hours,
          minutes,
          seconds,
          timerName,
       });

       props.closeOverlayFunc()
    }
    return (
       <div className="new-timer">
          <p>Add New Timer</p>
          <div className="set-time-container">
             <input
                type="number"
                min="00"
                step="01"
                max="100"
                placeholder="00"
                className="hours"
             />
             <input
                type="number"
                min="00"
                step="01"
                max="60"
                placeholder="00"
                className="minutes"
             />
             <input
                type="number"
                min="00"
                step="01"
                max="60"
                placeholder="00"
                className="seconds"
             />
          </div>
 
          <div className="set-name-container">
             <input type="text" placeholder="Name" className="set-timer-name"/>
          </div>
 
          <div className="set-timer-btns">
             <button className="save-timer" onClick={getNewTimer}>
                Save
             </button>
             <button className="cancel-timer" onClick={props.closeOverlayFunc}>
                Cancel
             </button>
          </div>
       </div>
    );
 }

 export default SetTimerModal