const timeWrapper = document.querySelector("#time-wrapper");

// ! 找出問題改善

// const timeObj = JSON.parse(localStorage.getItem("timeObj")) || {
//   minute: 0,
//   second: 0,
// };
const storageTotalSecond = JSON.parse(localStorage.getItem("totalSecond")) || 0;

// 設定的時間(分, 秒)
// let { minute: settimgMinute, second: settingSecond } = timeObj;

let totalSecond = storageTotalSecond;

// const timer = setInterval(countdown, 1000);


// function countdown() {
//   if (totalSecond < 0) {
//     clearInterval(timer);
//   }
//   totalSecond--;
//   showTime(totalSecond);
// }

// function showTime(totalSecond) {
//   let minute = Math.floor(totalSecond / 60);
//   let second = totalSecond % 60;
//   // console.log(minute,second)
//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;
//   timeWrapper.innerHTML = `${minute} : ${second}`;
// }

// function secondToTime(sec) {}

export function timerStart() {
  const timer = setInterval(countdown, 1000);

  function countdown() {
    let minute = Math.floor(totalSecond / 60);
    let second = totalSecond % 60;
    totalSecond--;

    if (totalSecond < 0) {
      clearInterval(timer);
    }

    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;
    timeWrapper.innerHTML = `${minute} : ${second}`;
  }
}

function showTime(totalSecond){
  let minute = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`;
}

// ! 勿動
// const timer = setInterval(countdown, 1000);
// function countdown() {
//   let minute = Math.floor(totalSecond / 60);
//   let second = totalSecond % 60;
//   totalSecond--;

//   if (totalSecond < 0) {
//     clearInterval(timer);
//   }

//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;
//   timeWrapper.innerHTML = `${minute} : ${second}`;
// }

export function getSettingTime() {
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  return Number(settingMin.value) * 60 + Number(settingSec.value);
}

export function setTime(totalSecond) {
  const timeWrapper = document.querySelector("#time-wrapper");
  showTime(totalSecond);

  // timeWrapper.innerHTML = `${minute} : ${second}`;
  // localStorage.setItem("totalSecond", JSON.stringify(storageTotalSecond));
}

// window.addEventListener("DOMContentLoaded", showTime);
