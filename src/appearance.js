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
} from "./timer";

// * buttons
const btns = document.querySelectorAll(".btn");
export const btnStop = document.querySelector("#btn-stop");
const btnStart = document.querySelector("#btn-start");
export const btnPause = document.querySelector("#btn-pause");
const btnSetting = document.querySelector("#btn-setting");
const btnCancel = document.querySelector("#btn-cancel");
const btnOk = document.querySelector("#btn-ok");

// * time setting input
const inputMinute = document.querySelector("#setting-minute");
const inputSecond = document.querySelector("#setting-second");

// * led
const led = document.getElementById("led");

// * buttons audio
const mousedown = new Audio(mousedownAudio);
const settingMousedown = new Audio(settingMousedownAudio);
const settingMouseup = new Audio(settingMouseupAudio);

// * 為 4 個按鈕新增事件
btns.forEach((btn) => {
  btn.addEventListener("mousedown", handleBtnMousedown);
  btn.addEventListener("mouseup", handleBtnMouseup);
});

// * 滑鼠按下並移開，就跳起 btnSetting 按鈕
btnSetting.addEventListener("mouseleave", () =>
  btnSetting.classList.remove("btn--clicked")
);

// * 處理時間設定 modal 的按鈕
[btnCancel, btnOk].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    closeModalOverlay();

    if (e.target.id === "btn-ok") {
      settingTime();
      showScreenTime();
      localStorage.setItem("totalSecond", JSON.stringify(totalSecond));
    }
  })
);

[inputMinute, inputSecond].forEach((i) =>
  i.addEventListener("focus", (e) => e.target.select())
);

/**
 * * 處理 4 個 btn mousedown 事件
 * @param {*} e
 */
function handleBtnMousedown(e) {
  if (e.target.id !== "btn-setting") {
    e.target.setAttribute("disabled", "");
    mousedown.currentTime = 0;
    mousedown.play();
  }

  if (e.target.id === "btn-stop") {
    led.classList.remove("led__light--running");
    led.classList.remove("led__light--pause");
    timerStopUI();
    timerStop();
    showScreenTime();
    led.classList.remove("led__light-animation");
    btnStop.classList.remove("btn--animation");
  }

  if (e.target.id === "btn-start") {
    timerStart();
    led.classList.add("led__light--running");
    led.classList.remove("led__light--pause");
    [btnStop, btnPause].forEach((btn) => {
      btn.removeAttribute("disabled", "");
    });
  }

  if (e.target.id === "btn-pause") {
    timerPauseUI();
    timerPause();
    led.classList.remove("led__light--running");
    led.classList.add("led__light--pause");
  }

  if (e.target.id === "btn-setting") {
    btnSetting.classList.add("btn--clicked");
    settingMousedown.play();
  }
}

/**
 * * 處理 4 個 btn mouseup 事件
 * @param {*} e
 */
function handleBtnMouseup(e) {
  if (e.target.id === "btn-stop") {
    timerStop();
  }

  if (e.target.id === "btn-setting") {
    btnSetting.classList.remove("btn--clicked");
    timerSetting();
    settingMouseup.play();

    timerPause();
    timerPauseUI();
    led.classList.add("led__light--pause");
    led.classList.remove("led__light--running");
  }
}

/**
 * * 處理停止鈕的 UI 相關
 */
function timerStopUI() {
  // 彈起 start 按鈕
  btnStart.removeAttribute("disabled", "");
  btnPause.setAttribute("disabled", "");
}

/**
 * * 處理暫停鈕的 UI 相關
 */
function timerPauseUI() {
  btnStart.removeAttribute("disabled", "");
}

/**
 * * 計時設定介面與其設定
 */
function timerSetting() {
  openModalOverlay();
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
 * * 開啟 modal-overlay
 * 開啟位於 modal 後面的暗色遮蓋層
 */
function openModalOverlay() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.add("modal-overlay--active");
}

/**
 * * 關閉 modal-overlay
 * 關閉位於 modal 後面的暗色遮蓋層
 */
function closeModalOverlay() {
  const modalOverlay = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal-overlay--active");
}

// Restricts input for the given textbox to the given inputFilter.
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
        // document.querySelector(".setting-modal__msg").classList.add("active");
        showMsg();
        console.log(1)
        this.value = this.oldValue;
        this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
      }
    });
  });
}

// Restrict input to digits and '.' by using a regular expression filter.
setInputFilter(document.getElementById("setting-minute"), function (value) {
  return /^\d*\.?\d*$/.test(value);
});
setInputFilter(document.getElementById("setting-second"), function (value) {
  return /^\d*$/.test(value);
  // return /^\d*\.?\d*$/.test(value);
});

// setting-minute
// setting-second

function showMsg(){
  const msg = document.querySelector('.msg');
  requestAnimationFrame(() => {
    msg.classList.remove("active");

    setTimeout(() => {
      msg.classList.add("active");
    }, 0);
  });
}
