import { btnStop, btnPause } from "./appearance";
import beepAudio from "./audio/beep.wav";

const beep = new Audio(beepAudio);
const timeWrapper = document.querySelector("#time-wrapper");
// export const storageTotalSecond =
//   JSON.parse(localStorage.getItem("totalSecond")) || 1500;
export let totalSecond = JSON.parse(localStorage.getItem("totalSecond")) || 1500;
export let timer;
export let timesUpInterval;
export let timeIsUp = false;

// 畫面載入時，先調用 showTime() 來顯示目前設定的時間
showScreenTime();

/**
 * * 將 totalSecond 的秒數轉換成分與秒，顯示到畫面中
 */
export function showScreenTime() {
  let minute = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;
  minute < 0 ? (minute = 0) : minute;
  second < 0 ? (second = 0) : second;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`;
}

/**
 * * 取得使用者設定的時間，並更新 totalSecond
 */
export function settingTime() {
  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  totalSecond = Number(settingMin.value) * 60 + Number(settingSec.value);
}

/**
 * * 計時開始
 */
export function timerStart() {
  const countdown = () => {
    totalSecond--;
    showScreenTime();
    // 如果 totalSecond <= 0 代表時間到
    if (totalSecond <= 0) {
      // 清除計時器
      clearInterval(timer);
      // 調用時間到的函數
      timesUp();
    }
  };
  timer = setInterval(countdown, 1000);
}

/**
 * * 時間停止
 */
export function timerStop() {
  clearInterval(timer);
  totalSecond = JSON.parse(localStorage.getItem("totalSecond")) || 1500;
  if (timeIsUp) {
    clearInterval(timesUpInterval);
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
  timesUpInterval = setInterval(() => beep.play(), 1000);
  btnStop.classList.add("btn--animation");
  // 時間到之後，就不再准許使用者按下暫停
  btnPause.setAttribute("disabled", "");
}
