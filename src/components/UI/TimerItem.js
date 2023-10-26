import "./TimerItem.css";
import Timer from "../class/Timer";
import { useState } from "react";

function TimerItem(props) {
   const timerClass = "timer " + props.className;
   const startButton = document.querySelector(`.timer${props.id} #start-btn`);
   const pauseButton = document.querySelector(`.timer${props.id} #pause-btn`);
   const [secondsRemaining, updateSecondsRemaining] = useState(props.seconds);
   const [minutesRemaining, updateMinutesRemaining] = useState(props.minutes);
   const [hoursRemaining, updateHoursRemaining] = useState(props.hours);
   const [timeEnd, updateTimeEnd] = useState(null);

   const timer = new Timer(
      {
         hours: props.hours,
         minutes: props.minutes,
         seconds: props.seconds,
         timerName: props.timerName,
         timerId: props.id,
      },
      {
         startButton,
         pauseButton,
      }
   );

   // console.log(timer);

   function stopTimer() {
      timer.stop();
      // console.log(num)
      // clearInterval(num)
   }

   function startTimer() {
      timer.start(
         { updateSecondsRemaining, secondsRemaining },
         { updateMinutesRemaining, minutesRemaining },
         { updateHoursRemaining, hoursRemaining },
         { updateTimeEnd, formatTimerHands }
      );
   }

   function formatTimerHands(hand) {
      if (hand === "") {
         return "00";
      } else if (hand <= 9) {
         return "0" + hand;
      } else {
         return hand;
      }
   }

   function setTimerName() {
      if (!props.timerName) {
         return `Timer(${timer.timerId + 1})`;
      } else {
         return props.timerName;
      }
   }

   function deleteTimerHandler(){
      props.deleteTimerHandler(props.randId)
   }
   // timer.tick()
   // timer.stop()

   return (
      <div className={timerClass}>
         <svg width="100%" height="200">
            <circle
               r="75"
               cx="50%"
               cy="50%"
               stroke="#0066ff"
               strokeWidth={5}
               strokeLinecap="round"
               strokeDasharray={2 * 75 * Math.PI}
               strokeDashoffset={1}
               fill="transparent"
               // transform="rotate(-90,100,100)"
            ></circle>
         </svg>

         <div className="time-remaining-container">
            <div className="time-remaining">
               {formatTimerHands(hoursRemaining)}:
            </div>
            <div className="time-remaining">
               {formatTimerHands(minutesRemaining)}:
            </div>
            <div className="time-remaining">
               {formatTimerHands(secondsRemaining)}
            </div>
         </div>
         <div className="time-end">{timeEnd}</div>
         <div className="timer-name">{setTimerName()}</div>
         <div className="controls">
            <button id="delete-btn" onClick={deleteTimerHandler}>Del</button>
            <button id="start-btn" onClick={startTimer}>
               Start
            </button>
            <button id="pause-btn" onClick={stopTimer}>
               Stop
            </button>
         </div>
      </div>
   );
}

export default TimerItem;
