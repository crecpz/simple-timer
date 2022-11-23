import { timesUpUI } from "./ui";
import beepAudio from "./audio/beep.wav";

// 鈴聲
const beep = new Audio(beepAudio);
// beep.volume = 0.1;

export let userSettingTime =
  JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
export let displayTime = userSettingTime;
export let remainingTime = displayTime;

export let timer;
export let timesUpSoundInterval;
export let timeIsUp = false;

// 畫面載入時，先調用 showScreenTime() 來顯示目前設定的時間
showScreenTime(displayTime);

/**
 * * 將 userSettingTime 的秒數轉換成分與秒，顯示到畫面中
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

/**
 * * 使用者按下計時設定中的 btnOk 時，更新 userSettingTime
 */
export function settingTime() {
  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  userSettingTime = Number(settingMin.value) * 60 + Number(settingSec.value);
}

/**
 * * 計時開始
 */
export function timerStart() {
  // 按下 start 當下的時間戳
  let startTimestamp = Date.now();
  // 按下 start 時，先將 remainingTime 設定成目前顯示的時間
  console.log("displayTime:", displayTime)
  remainingTime = displayTime;

  const countdown = () => {
    // 每秒獲取一個「最新時間戳」
    const nowTimestamp = Date.now();
    // 算出目前時間差(相對於 startTimestamp)
    let timeGap = Math.floor((nowTimestamp - startTimestamp) / 1000);
    // 顯示到螢幕上的時間
    displayTime = remainingTime - timeGap;
    // 調用函數顯示目前時間
    showScreenTime(displayTime);
    // 如果 userSettingTime <= 0 代表時間到
    if (displayTime <= 0) {
      // 清除計時器
      clearInterval(timer);
      // 調用時間到的函數
      timesUp();
      timesUpUI();
    }
  };

  timer = setInterval(countdown, 1000);
}

/**
 * * 時間停止
 */
export function timerStop() {
  clearInterval(timer);
  userSettingTime = JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
  showScreenTime(userSettingTime);
  remainingTime = userSettingTime;
  displayTime = userSettingTime;

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
