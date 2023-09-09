import "./App.css";
import React from "react";
import { useState, useEffect } from "react";

type Props = {};

export default function App({}: Props) {
  const title = "Countdown to my birthday";
  const subTitle =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo quas obcaecati atque? Aliquam architecto illum, dignissimos, amet incidunt at expedita quia, ex error molestiae impedit in est. Numquam, soluta dolor.";

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const getCountDown = (birthDate: any) => {
    let present = new Date().getTime();
    let timeCount = birthDate - present;

    let days = Math.floor(timeCount / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (timeCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((timeCount % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeCount % (1000 * 60)) / 1000);
    setTime({
      days,
      hours,
      minutes,
      seconds,
    });
  };
  useEffect(() => {
    setInterval(() => {
      let day = 14;
      let month = 2;
      let year =
        new Date().getMonth() + 1 > month
          ? new Date().getFullYear() + 1
          : new Date().getMonth() + 1 === month && new Date().getDate() > day
          ? new Date().getFullYear() + 1
          : new Date().getFullYear();
      let birthDate = new Date(`${month}/${day}/${year}`).getTime();
      getCountDown(birthDate);
    });
  });
  return (
    <div className="container">
      <div className="countdown">
        <h1 className="title">{title}</h1>
        <p className="subtitle">{subTitle}</p>
        <div className="card-group">
          <div className="card">
            <div className="card-time">{time.days}</div>
            <div className="card-title">{"Days"}</div>
          </div>
          <div className="card">
            <div className="card-time">{time.hours}</div>
            <div className="card-title">{"Hours"}</div>
          </div>
          <div className="card">
            <div className="card-time">{time.minutes}</div>
            <div className="card-title">{"Minutes"}</div>
          </div>
          <div className="card">
            <div className="card-time">{time.seconds}</div>
            <div className="card-title">{"Seconds"}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { useEffect, useState } from "react";

// import "./App.css";

// function App() {
//   //state
//   const [time, setTime] = useState(new Date());

//   //function input TimeStamp and then return day,hours,minutes and seconds
//   const getCountdown = (birthDate) => {
//     let now = new Date().getTime();
//     let timeCount = birthDate - now; //convert milliseconds to seconds

//     let days = Math.floor(timeCount / (60 * 60 * 24)); //convert seconds to days
//     let hours = Math.floor(
//       (timeCount % (60 * 60 * 24)) / (60 * 60) //convert seconds to hours
//     );
//     let minutes = Math.floor((timeCount % (60 * 60)) / 60);
//     let seconds = Math.floor((timeCount % 60) / 60);

//     return [days, hours, minutes, seconds];
//   };

//   useEffect(() => {
//     setInterval(() => {
//       let day = 14;
//       let month = 2;
//       let year =
//         new Date().getMonth() + 1 > month
//           ? new Date().getFullYear() + 1
//           : new Date().getMonth() + 1 === month && new Date().getDate() > day
//           ? new Date().getFullYear() + 1
//           : new Date().getFullYear();
//       let birthDate = new Date(`${month}/${day}/${year}`).getTime();
//       getCountdown(birthDate);
//     });
//   });

//   return (
//     <div className="container">
//       {time.getDate()}/{time.getMonth() + 1}/{time.getFullYear()}{" "}
//       {time.getHours()}:{time.getMinutes() + 1}:{time.getSeconds()}
//     </div>
//   );
// }

// export default App;
