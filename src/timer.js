import { timesUpUI } from "./ui";
import beepAudio from "./audio/beep.wav";

// 鈴聲
const beep = new Audio(beepAudio);
beep.volume = 0.1;

export let userSettingTime =
  JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
export let displayTime = userSettingTime;
export let timer;
export let timesUpSoundInterval;
export let timeIsUp = false;

// ! 預設不應該是 true，只是為了測試才用 true，
// export let timeIsPause = true;

// 畫面載入時，先調用 showTime() 來顯示目前設定的時間
showTime();

/**
 * * 將 userSettingTime 的秒數轉換成分與秒，顯示到畫面中
 */
export function showTime(time) {
  const timeWrapper = document.querySelector("#time-wrapper");
  let minute = Math.floor(time / 60);
  let second = time % 60;
  minute < 0 ? (minute = 0) : minute;
  second < 0 ? (second = 0) : second;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`;
}

// ! 原版戊山
// /**
//  * * 將 userSettingTime 的秒數轉換成分與秒，顯示到畫面中
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
 * * 取得使用者設定的時間，並更新 userSettingTime
 */
export function settingTime() {
  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  userSettingTime = Number(settingMin.value) * 60 + Number(settingSec.value);
}

// setInterval(() => {
//   const now = Date.now();
//   const gap = userSettingTime - Math.floor((now - startTime) / 1000);
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
  // 記錄按下 start 當下的時間戳
  let startTime = Date.now();

  const countdown = () => {
    // 每秒獲取一個「最新時間戳」
    const now = Date.now();

    // 算出目前時間差(相對於 startTime 的時間戳)
    const timeGap = Math.floor((now - startTime) / 1000);

    displayTime = userSettingTime - timeGap;

    // @ 僅負責顯示時間
    showTime(displayTime);

    // 如果 userSettingTime <= 0 代表時間到
    if (userSettingTime <= 0) {
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
//     userSettingTime--;
//     showScreenTime();
//     // 如果 userSettingTime <= 0 代表時間到
//     if (userSettingTime <= 0) {
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
  userSettingTime = JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
  console.log(userSettingTime);
  showTime(userSettingTime);
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

  userSettingTime = displayTime;
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
//   const gap = userSettingTime - Math.floor((now - startTime) / 1000);
//   // let minute = Math.floor(gap / 60);
//   // let second = gap % 60;
//   // minute < 0 ? (minute = 0) : minute;
//   // second < 0 ? (second = 0) : second;
//   // minute = minute < 10 ? "0" + minute : minute;
//   // second = second < 10 ? "0" + second : second;
//   // console.log(minute, second);
// }, 1000);
