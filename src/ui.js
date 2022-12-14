import mousedownAudio from "./audio/mousedown.wav";
import settingMousedownAudio from "./audio/setting-mousedown.wav";
import settingMouseupAudio from "./audio/setting-mouseup.wav";
import {
  updateSettingTime,
  timerStart,
  showScreenTime,
  timerStop,
  timerPause,
  displayTime,
  timeIsUp,
} from "./timer";

// * buttons
const btnStop = document.querySelector("#btn-stop");
const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");
const btnSetting = document.querySelector("#btn-setting");
const btnCancel = document.querySelector("#btn-cancel");
const btnOk = document.querySelector("#btn-ok");

// * time setting input
const inputMinute = document.querySelector("#setting-minute");
const inputSecond = document.querySelector("#setting-second");

// * led
const led = document.getElementById("led");

// * buttons audio
const mousedownSound = new Audio(mousedownAudio);
const btnSettingMousedownSound = new Audio(settingMousedownAudio);
const btnSettingMouseupSound = new Audio(settingMouseupAudio);

// * 為 4 個按鈕新增 mousedown, mouseup 事件
document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mousedown", handleBtnMousedown);
  btn.addEventListener("mouseup", handleBtnMouseup);
});

// * 修正 mobile 高度問題
appHeight();

/**
 * * 4 個主按鈕 mousedown 事件
 * @param {*} e
 */
function handleBtnMousedown(e) {
  // 只要點到的不是 btn-setting
  if (e.target !== btnSetting) {
    // 將按鈕 disabled
    e.target.setAttribute("disabled", "");
    // 播放按鈕聲音(先將聲音秒數歸零)
    mousedownSound.currentTime = 0;
    mousedownSound.play();
  }

  // 停止
  if (e.target === btnStop) {
    // 時間停止
    timerStop();
    // 設成「按下停止鈕」的 UI 狀態
    timerStopUI();
    // 顯示先前設定好的時間到螢幕上
    showScreenTime();
  }

  // 開始
  if (e.target === btnStart) {
    timerStart();
    timerStartUI();
  }

  // 暫停
  if (e.target === btnPause) {
    timerPause();
    timerPauseUI();
  }

  if (e.target === btnSetting) {
    // btnSetting 新增按鈕被按下的 class
    btnSetting.classList.add("btn--clicked");
    // 播放 btnSetting 聲音
    btnSettingMousedownSound.play();
  }
}

/**
 * * 4 個主按鈕 mouseup 事件
 * @param {*} e
 */
function handleBtnMouseup(e) {
  // 停止
  if (e.target === btnStop) {
    timerStop();
  }
  // 計時設定
  if (e.target === btnSetting) {
    // 暫停計時
    timerPause();
    // 顯示 modalOverlay
    showModalOverlay();
    // 將 displayTime 換算成分與秒格式，並分別顯示在 input 中
    fillSettingModalInput();
    // 設定按下「設定鈕」後的 UI 狀態
    timerSettingUI();
  }
}

/**
 * * 按下「停止鈕」的 UI 狀態
 */
function timerStopUI() {
  // 彈起 start 按鈕
  btnStart.removeAttribute("disabled", "");
  btnPause.setAttribute("disabled", "");
  // 移除 LED class
  led.classList.remove("led__light-animation--running");
  led.classList.remove("led__light--pause");
  // 如果目前時間到
  btnStop.classList.remove("btn--animation");
  led.classList.remove("led__light-animation--times-up");
}

/**
 * * 按下「開始鈕」的 UI 狀態
 */
function timerStartUI() {
  // 新增 runngin 動畫 class
  led.classList.add("led__light-animation--running");
  // 移除 pause class
  led.classList.remove("led__light--pause");
  [btnStop, btnPause].forEach((btn) => {
    btn.removeAttribute("disabled", "");
  });
}

/**
 * * 按下「暫停鈕」的 UI 狀態
 */
function timerPauseUI() {
  // 彈起開始鈕
  btnStart.removeAttribute("disabled", "");
  // 移除 running 動畫
  led.classList.remove("led__light-animation--running");
  // 亮起 pause 燈
  led.classList.add("led__light--pause");
}

/**
 * * 設定按下「設定鈕」後的 UI 狀態
 */
function timerSettingUI() {
  // btnSetting 新增按鈕被彈起的 class
  btnSetting.classList.remove("btn--clicked");
  // 播放按鈕聲
  btnSettingMouseupSound.play();
  // 彈起 btnStart, 按下 btnPause, btnStop
  btnStart.removeAttribute("disabled", "");
  [btnStop, btnPause].forEach((btn) => btn.setAttribute("disabled", ""));
  // 移除 running 動畫
  led.classList.remove("led__light-animation--running");
}

// * 若使用者在 btnSetting(計時設定鈕)移開滑鼠，就跳起 btnSetting 按鈕
btnSetting.addEventListener("mouseleave", () =>
  // 移除按下按鈕樣式 class
  btnSetting.classList.remove("btn--clicked")
);

// * setting-modal 按鈕監聽事件
[btnCancel, btnOk].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    // 隱藏 modalOverlay
    hideModalOverlay();
    // 如果觸發對象是 btnOk
    if (e.target === btnOk) {
      // 將使用者設定的時間更新，存至 displayTime
      updateSettingTime();
      // 將 displayTime 顯示到螢幕上
      showScreenTime();
    }
  })
);

// * 使用者點 input 內的數字時，反白 input 內容
[inputMinute, inputSecond].forEach((i) =>
  i.addEventListener("click", function (e) {
    this.setSelectionRange(0, this.value.length);
  })
);

/**
 * * 將 displayTime 換算成分與秒格式，並分別顯示在 input 中
 */
function fillSettingModalInput() {
  // 換算分鐘與秒數
  let minute = Math.floor(displayTime / 60);
  let second = displayTime % 60;
  // < 0 則設為 0, < 10 則前面補 0
  minute < 0 ? (minute = 0) : minute;
  second < 0 ? (second = 0) : second;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  // 將值放入 settingModal 的 input 中
  inputSecond.value = second;
  inputMinute.value = minute;
}

/**
 * * 顯示 modal-overlay
 * 開啟位於 modal 後面的暗色遮蓋層
 */
function showModalOverlay() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.add("modal-overlay--active");
}

/**
 * * 隱藏 modal-overlay
 * 關閉位於 modal 後面的暗色遮蓋層
 */
function hideModalOverlay() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal-overlay--active");
}

/**
 * * 過濾輸入的內容
 * @param {*} textbox 目標 input
 * @param {*} inputFilter 過濾規則 callback
 */
function setInputFilter(textbox, inputFilter) {
  [
    "input",
    "keydown",
    "keyup",
    "mousedown",
    "mouseup",
    "select",
    "contextmenu",
    "drop",
  ].forEach(function (event) {
    textbox.addEventListener(event, function () {
      if (inputFilter(this.value)) {
        this.oldValue = this.value;
        this.oldSelectionStart = this.selectionStart;
        this.oldSelectionEnd = this.selectionEnd;
      } else if (this.hasOwnProperty("oldValue")) {
        // 顯示提示訊息
        showMsg();
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

/**
 * * 計時設定 input RegExp
 * @param {*} value
 * @returns value test 結果
 */
const regFunc = function (value) {
  return /^\d*$/.test(value);
};

// * 過濾計時設定 input (只允許輸入數字)
// minute
setInputFilter(document.getElementById("setting-minute"), regFunc);
// second
setInputFilter(document.getElementById("setting-second"), regFunc);

/**
 * * 顯示提示訊息
 */
function showMsg() {
  const msg = document.querySelector(".msg");
  msg.classList.remove("active");
  requestAnimationFrame(() => {
    msg.classList.add("active");
  });
}

/**
 * * time's up  UI 相關
 */
export function timesUpUI() {
  // 移除 running 動畫，改放 times-up 動畫
  led.classList.remove("led__light-animation--running");
  led.classList.add("led__light-animation--times-up");
  // 在停止按鈕上亮起顏色提示
  btnStop.classList.add("btn--animation");
  // 時間到之後，就不再准許使用者按下暫停
  btnPause.setAttribute("disabled", "");
}

/**
 * * 修正 mobile 100vh 的問題
 */
export function appHeight() {
  const doc = document.documentElement;
  doc.style.setProperty("--app-height", `${window.innerHeight}px`);
}
