import { timesUpUI } from "./ui";
import beepAudio from "./audio/beep.wav";

// 顯示到螢幕上的時間
export let displayTime =
  JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
// 剩餘時間(剩餘時間預設等於 displayTime)
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
 * * 將 displayTime 轉換成分與秒，顯示到畫面中
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
 * * 將 setting-modal 中輸入的時間更新至 displayTime
 */
export function updateSettingTime() {
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  // 取得使用者在 setting-modal 內輸入的分與秒，換算成秒數，
  displayTime = Number(settingMin.value) * 60 + Number(settingSec.value);
  // 將最新的 displayTime 存至 localStorage
  localStorage.setItem("userSettingTime", JSON.stringify(displayTime));
}

/**
 * * 計時開始
 */
export function timerStart() {
  // 將 remainingTime 設定成 displayTime(目前顯示的時間)
  remainingTime = displayTime;
  // 取得按下 start 當下的時間戳
  let startTimestamp = Date.now();
  // 建立計時器
  timer = setInterval(() => {
    // 每秒獲取一個新的「當下時間戳」
    const nowTimestamp = Date.now();
    // 算出目前時間差(相對於 startTimestamp 差距幾秒?)
    let timeGap = Math.floor((nowTimestamp - startTimestamp) / 1000);
    // 螢幕上的時間 = 剩餘時間 - 時間差
    displayTime = remainingTime - timeGap;
    // 顯示目前時間
    showScreenTime();
    // 如果 displayTime <= 0 代表時間到
    if (displayTime <= 0) {
      // 清除計時器
      clearInterval(timer);
      // timeIsUp 狀態設為 true
      timeIsUp = true;
      timesUpSoundInterval = setInterval(() => beep.play(), 1000);
      // 時間到 UI 相關設定
      timesUpUI();
    }
  }, 1000);
}

/**
 * * 時間停止
 */
export function timerStop() {
  // 停止倒數計時
  clearInterval(timer);
  // 將顯示的時間設定為 localStorage 中的時間
  displayTime = JSON.parse(localStorage.getItem("userSettingTime")) || 1500;
  // 顯示時間
  showScreenTime();

  // 如果現在是時間到狀態(響鈴狀態)
  if (timeIsUp) {
    // 停止響鈴
    clearInterval(timesUpSoundInterval);
    // timeIsUp 狀態恢復成 false
    timeIsUp = false;
  }
}

/**
 * * 時間暫停
 */
export function timerPause() {
  // 清除目前的倒數計時器
  clearInterval(timer);
}
