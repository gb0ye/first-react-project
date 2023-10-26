import "./App.css";
import Background from "./components/UI/background";
import ApplicationControls from "./components/UI/ApplicationControls";
import Overlay from "./components/overlay/overlay";
import TimerItem from "./components/UI/TimerItem";
import { useState } from "react";
import SideBar from "./components/UI/Side Bar/SideBar";
import MenuBar from "./components/UI/MenuBar/MenuBar";

function App() {
   const dummyText = [
      {
         randId: Math.random(),
         hours: 1,
         minutes: 2,
         seconds: 5,
         timerName: "First CountDown",
      },
   ];
   const [overlayState, overlayStateFunc] = useState();
   const [timers, setTimers] = useState(dummyText);
   const [editTimerClass, setEditTimerClass] = useState("");

   function showSetTimerModal() {
      overlayStateFunc({
         modal: "setTimerModal",
      });
   }
   function closeOverlay() {
      overlayStateFunc();
   }

   function getNewTimer({ randId, hours, minutes, seconds, timerName }) {
      const newTimer = {
         randId,
         hours,
         minutes,
         seconds,
         timerName,
      };

      setTimers((prevTimers) => {
         return [...prevTimers, newTimer];
      });
   }
   function addEditTimerClass() {
      overlayStateFunc({
         modal: "EditTimerModal",
         removeEditTimerclassFunc: removeEditTimerclass,
      });
      setEditTimerClass(" edit");
   }

   function removeEditTimerclass() {
      setEditTimerClass();
   }

   function deleteTimerHandler(timerId) {
      setTimers((prevTimers) => {
         console.log(timerId);
         const updatedTImers = prevTimers.filter((timer) => {
            console.log(timer);
            return timer.randId !== timerId;
         });
         return updatedTImers;
      });
   }

   return (
      <Background>
         {/* <MenuBar
            pages={[
               { name: "Timer", linkAddress: "#", className: "timer-page-btn" },
               { name: "Alarm", linkAddress: "#", className: "alarm-page-btn" },
               { name: "StopWatch", linkAddress: "#", className: "stop-watch-page-btn" },
            ]}
         ></MenuBar> */}
         <SideBar
            pages={[
               { name: "Focus Session", linkAddress: "#focus" },
               {
                  name: "Timer",
                  linkAddress: "#timer",
                  className: "timer-page-btn",
               },
               {
                  name: "Alarm",
                  linkAddress: "#alarm",
                  className: "alarm-page-btn",
               },
               {
                  name: "StopWatch",
                  linkAddress: "#stopwatch",
                  className: "stop-watch-page-btn",
               },
               { name: "WorldClock", linkAddress: "#worldclock" },
            ]}
         ></SideBar>
         {overlayState && (
            <Overlay
               getNewTimer={getNewTimer}
               overlayStateFunc={overlayStateFunc}
               modal={overlayState.modal}
               removeEditTimerClass={overlayState.removeEditTimerclassFunc}
               closeOverlayFunc={closeOverlay}
            ></Overlay>
         )}
         <ApplicationControls
            buttons={[
               { name: "+", className: "plus-btn", onClick: showSetTimerModal },
               {
                  name: "edit",
                  className: "edit-btn",
                  onClick: addEditTimerClass,
               },
            ]}
         ></ApplicationControls>
         <div className="timer-container">
            {timers.map((timer, index) => {
               return (
                  <TimerItem
                     key={timer.randId}
                     randId={timer.randId}
                     id={index}
                     hours={timer.hours}
                     minutes={timer.minutes}
                     seconds={timer.seconds}
                     timerName={timer.timerName}
                     className={"timer" + index + editTimerClass}
                     deleteTimerHandler={deleteTimerHandler}
                  />
               );
            })}
         </div>
      </Background>
   );
}

export default App;
