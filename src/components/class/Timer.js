class Timer {
   constructor(
      { hours, minutes, seconds, timerName, timerId },
      { startButton, pauseButton }
   ) {
      this.timerHours = hours;
      this.timerMinutes = minutes;
      this.timerSeconds = seconds;
      this.timerName = timerName;
      this.startButton = startButton;
      this.pauseButton = pauseButton;
      this.timerId = timerId;

      this.milliseconds =
         this.timerHours * 60 * 60 * 1000 +
         this.timerMinutes * 60 * 1000 +
         this.timerHours * 1000;
   }

   start = (
      { updateSecondsRemaining, secondsRemaining },
      { updateMinutesRemaining, minutesRemaining },
      { updateHoursRemaining, hoursRemaining },
      { updateTimeEnd, formatTimerHands }
   ) => {
      clearInterval(sessionStorage.getItem(`timerInterval${this.timerId}`));
      this.tick(
         { updateSecondsRemaining, secondsRemaining },
         { updateMinutesRemaining, minutesRemaining },
         { updateHoursRemaining, hoursRemaining }
      );
      this.EndTime(updateTimeEnd, formatTimerHands);
   };

   stop = () => {
      clearInterval(sessionStorage.getItem(`timerInterval${this.timerId}`));
   };

   tick = (
      { updateSecondsRemaining, secondsRemaining },
      { updateMinutesRemaining, minutesRemaining },
      { updateHoursRemaining, hoursRemaining }
   ) => {
      let seconds;
      let minutes;
      let hours;
      let milliseconds = this.milliseconds;

      if (secondsRemaining === "") {
         seconds = 0;
      } else {
         seconds = parseFloat(secondsRemaining);
      }

      if (minutesRemaining === "") {
         minutes = 0;
      } else {
         minutes = parseFloat(minutesRemaining);
      }

      if (hoursRemaining === "") {
         hours = 0;
      } else {
         hours = parseFloat(hoursRemaining);
      }

      const intervalId = setInterval(() => {


         // updateSecondsRemaining(secondsT);
         // updateMinutesRemaining(parseInt(minutesT))
         // updateHoursRemaining(parseInt(hoursT)

         //    seconds = seconds - 1;
         //    console.log(seconds);
         //    if (seconds === 0) {
         //       if (minutes !== 0) {
         //          minutes = minutes - 1;
         //          seconds = 5;
         //       } else {
         //          if (hours !== 0) {
         //             hours = hours - 1;
         //             minutes = 5;
         //          }
         //       }
         //       if (hours === 0 && minutes === 0) {
         //          console.log("Timer Ended");
         //          clearInterval(
         //             sessionStorage.getItem(`timerInterval${this.timerId}`)
         // );
         // }
         // minutes = 59
         // }
      }, 1000);
      sessionStorage.setItem(`timerInterval${this.timerId}`, intervalId);
   };

   EndTime = (updateTimeEnd, formatTimerHands) => {
      const totalMilliseconds = new Date().getTime() + this.milliseconds;
      const date = new Date(totalMilliseconds);
      const hours = formatTimerHands(date.getHours());
      const minutes = formatTimerHands(date.getMinutes());
      updateTimeEnd(`${hours} : ${minutes}`);
   };
}

export default Timer;
