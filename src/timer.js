import { timesUpUI } from "./ui";
import beepAudio from "./audio/beep.wav";

// 顯示到螢幕上的時間
export let displayTime =
  JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
// 剩餘時間
export let remainingTime = displayTime;
// 倒數計時器
export let timer;
// 鈴聲
const beep = new Audio(beepAudio);
// 時間到重複播放鈴聲
export let timesUpSoundInterval;
// 表示目前是否為時間到狀態
export let timeIsUp = false;

// 畫面載入時，先調用 showScreenTime() 來顯示目前設定的時間
showScreenTime();

/**
 * * 將秒數轉換成分與秒，顯示到畫面中
 */
export function showScreenTime() {
  const timeWrapper = document.querySelector("#time-wrapper");
  let minute = Math.floor(displayTime / 60);
  let second = displayTime % 60;
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
  displayTime = Number(settingMin.value) * 60 + Number(settingSec.value);
}

/**
 * * 計時開始
 */
export function timerStart() {
  // 按下 start 時，先將 remainingTime 設定成 displayTime(目前顯示的時間)
  remainingTime = displayTime;
  // 按下 start 當下的時間戳
  let startTimestamp = Date.now();

  const countdown = () => {
    // 每秒獲取一個「最新時間戳」
    const nowTimestamp = Date.now();
    // 算出目前時間差(相對於 startTimestamp)
    let timeGap = Math.floor((nowTimestamp - startTimestamp) / 1000);
    // 螢幕上的時間 =
    displayTime = remainingTime - timeGap;
    // 調用函數顯示目前時間
    showScreenTime();
    // 如果 displayTime <= 0 代表時間到
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
  displayTime = JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
  showScreenTime();

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