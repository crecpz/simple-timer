import mousedownAudio from "./audio/mousedown.wav";
import settingMousedownAudio from "./audio/setting-mousedown.wav";
import settingMouseupAudio from "./audio/setting-mouseup.wav";
import {
  settingTime,
  timerStart,
  showScreenTime,
  totalSecond,
  timerStop,
  timerPause,
  timesUp,
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
    timerPauseUI(e);
  }

  // 設定時間
  if (e.target === btnSetting) {
    timerSettingUI();
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

  // 設定時間
  if (e.target === btnSetting) {
    // 暫停計時
    timerPause();
    // 播放按鈕聲
    btnSettingMouseupSound.play();
    // 彈起按鈕
    btnSetting.classList.remove("btn--clicked");
    // 按下設定鈕後的按鈕狀態與按下暫停鈕的狀態大致相同(只差按下設定鈕後，LED 燈不會有變化)
    // 傳入 e，來辨別目前按鈕為何
    timerPauseUI(e);
    // 開始進行設定時間
    timerSetting();
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
  if (timesUp) {
    btnStop.classList.remove("btn--animation");
    led.classList.remove("led__light-animation--times-up");
  }
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
function timerPauseUI(e) {
  // 彈起開始鈕
  btnStart.removeAttribute("disabled", "");
  // 移除 running 動畫
  led.classList.remove("led__light-animation--running");
  if (e.target === btnPause) {
    console.log(e.target);
    // 亮起 pause 燈
    led.classList.add("led__light--pause");
  }
}

/**
 * * 按下「設定鈕」的 UI 狀態
 */
function timerSettingUI() {
  // 新增按鈕被按下的 class
  btnSetting.classList.add("btn--clicked");
  // 播放 btnSetting 聲音
  btnSettingMousedownSound.play();
}

// * 若使用者在 btnSetting(設定時間鈕)移開滑鼠，就跳起 btnSetting 按鈕
btnSetting.addEventListener("mouseleave", () =>
  btnSetting.classList.remove("btn--clicked")
);

// * 處理時間設定 modal 的按鈕
[btnCancel, btnOk].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    hideModalOverlay();

    if (e.target === btnOk) {
      settingTime();
      showScreenTime();
      localStorage.setItem("totalSecond", JSON.stringify(totalSecond));
    }
  })
);

// * 使用者點 input 內的數字時，反白整個數字
[inputMinute, inputSecond].forEach((i) =>
  i.addEventListener("click", function (e) {
    this.setSelectionRange(0, this.value.length);
  })
);

/**
 * * 計時設定
 */
function timerSetting() {
  // 顯示 modalOverlay
  showModalOverlay();
  let minute = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;
  minute < 0 ? (minute = 0) : minute;
  second < 0 ? (second = 0) : second;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
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

// * 過濾設定時間的 input
// minute
setInputFilter(document.getElementById("setting-minute"), function (value) {
  return /^\d*\.?\d*$/.test(value);
});
// second
setInputFilter(document.getElementById("setting-second"), function (value) {
  return /^\d*$/.test(value);
});

/**
 * * 顯示提示訊息
 */
function showMsg() {
  const msg = document.querySelector(".msg");
  requestAnimationFrame(() => {
    msg.classList.remove("active");

    setTimeout(() => {
      msg.classList.add("active");
    }, 0);
  });
}

export function timesUpUI() {
  // 移除 running 動畫，改放 times-up 動畫
  led.classList.remove("led__light-animation--running");
  led.classList.add("led__light-animation--times-up");
  // 在停止按鈕上亮起顏色提示
  btnStop.classList.add("btn--animation");
  // 時間到之後，就不再准許使用者按下暫停
  btnPause.setAttribute("disabled", "");
}
