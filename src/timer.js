import { timesUpUI } from "./ui";
import beepAudio from "./audio/beep.wav";

// 時間到鈴聲
const beep = new Audio(beepAudio);
beep.volume = 0.1;

export let remainingTime =
  JSON.parse(localStorage.getItem("totalSecond")) || 1500;
// export let remainingTime = totalSecond;
export let timer;
export let timesUpSoundInterval;
export let timeIsUp = false;

// 畫面載入時，先調用 showTime() 來顯示目前設定的時間
showScreenTime();

/**
 * * 將 totalSecond 的秒數轉換成分與秒，顯示到畫面中
 */
export function showScreenTime(time) {
  const timeWrapper = document.querySelector("#time-wrapper");
  let minute = Math.floor(time / 60);
  let second = time % 60;
  minute < 0 ? (minute = 0) : minute;
  second < 0 ? (second = 0) : second;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`;
}

// /**
//  * * 將 totalSecond 的秒數轉換成分與秒，顯示到畫面中
//  */
// export function showScreenTime() {
//   const timeWrapper = document.querySelector("#time-wrapper");
//   let minute = Math.floor(remainingTime / 60);
//   let second = remainingTime % 60;
//   minute < 0 ? (minute = 0) : minute;
//   second < 0 ? (second = 0) : second;
//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;
//   timeWrapper.innerHTML = `${minute} : ${second}`;
// }

/**
 * * 取得使用者設定的時間，並更新 totalSecond
 */
export function settingTime() {
  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  remainingTime = Number(settingMin.value) * 60 + Number(settingSec.value);
}

// setInterval(() => {
//   const now = Date.now();
//   const gap = totalSecond - Math.floor((now - startTime) / 1000);
//   // let minute = Math.floor(gap / 60);
//   // let second = gap % 60;
//   // minute < 0 ? (minute = 0) : minute;
//   // second < 0 ? (second = 0) : second;
//   // minute = minute < 10 ? "0" + minute : minute;
//   // second = second < 10 ? "0" + second : second;
//   // console.log(minute, second);
// }, 1000);

/**
 * * 計時開始
 */
export function timerStart() {
  // 按下 start 當下的時間戳
  let startTime = Date.now();

  const countdown = () => {
    // 每秒獲取一個「最新時間戳」
    const now = Date.now();
    // 算出「最新時間戳」與「按下 start 當下的時間戳」的時間差距: (最新時間戳- 按下 start 當下的時間戳)/1000 = 差距秒數
    const gap = Math.floor((now - startTime) / 1000);

    const currentTime = remainingTime - gap;
    // remainingTime
    console.log(currentTime)

    showScreenTime(remainingTime - gap);
    // 如果 totalSecond <= 0 代表時間到
    if (remainingTime <= 0) {
      // 清除計時器
      clearInterval(timer);
      // 調用時間到的函數
      timesUp();
      timesUpUI();
    }
  };

  timer = setInterval(countdown, 1000);
}

// /**
//  * * 計時開始
//  */
// export function timerStart() {
//   const countdown = () => {
//     totalSecond--;
//     showScreenTime();
//     // 如果 totalSecond <= 0 代表時間到
//     if (totalSecond <= 0) {
//       // 清除計時器
//       clearInterval(timer);
//       // 調用時間到的函數
//       timesUp();
//       timesUpUI();
//     }
//   };
//   timer = setInterval(countdown, 1000);
// }

/**
 * * 時間停止
 */
export function timerStop() {
  clearInterval(timer);
  remainingTime = JSON.parse(localStorage.getItem("totalSecond")) || 1500;
  if (timeIsUp) {
    clearInterval(timesUpSoundInterval);
    timeIsUp = false;
  }
}

/**
 * * 時間暫停
 */
export function timerPause() {
  clearInterval(timer);
}

/**
 * * 時間到
 */
export function timesUp() {
  timeIsUp = true;
  timesUpSoundInterval = setInterval(() => beep.play(), 1000);
}

// let startTime = Date.now();

// setInterval(() => {
//   const now = Date.now();
//   const gap = totalSecond - Math.floor((now - startTime) / 1000);
//   // let minute = Math.floor(gap / 60);
//   // let second = gap % 60;
//   // minute < 0 ? (minute = 0) : minute;
//   // second < 0 ? (second = 0) : second;
//   // minute = minute < 10 ? "0" + minute : minute;
//   // second = second < 10 ? "0" + second : second;
//   // console.log(minute, second);
// }, 1000);
