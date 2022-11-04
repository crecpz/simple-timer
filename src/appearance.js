import {
  settingTime,
  timer,
  timerStart,
  showScreenTime,
  totalSecond,
  storageTotalSecond,
  timerStop,
  timerPause,
} from "./timer";

// * buttons
const btns = document.querySelectorAll(".btn");
const btnStop = document.querySelector("#btn-stop");
const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");
const btnSetting = document.querySelector("#btn-setting");
const btnCancel = document.querySelector("#btn-cancel");
const btnOk = document.querySelector("#btn-ok");
const inputMinute = document.querySelector("#setting-minute");
const inputSecond = document.querySelector("#setting-second");

btns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
  btn.addEventListener("mousedown", handleMousedown);
  btn.addEventListener("mouseup", handleMouseup);
});

// 滑鼠按下並移開，就跳起 btnSetting 按鈕
btnSetting.addEventListener("mouseleave", () =>
  btnSetting.classList.remove("btn--clicked")
);

[btnCancel, btnOk].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    closeModalOverlay();

    if (e.target.id === "cancel-btn") {
    }

    if (e.target.id === "ok-btn") {
      settingTime();
      showScreenTime();
      localStorage.setItem("totalSecond", JSON.stringify(totalSecond));
    }
  })
);

[inputMinute, inputSecond].forEach((i) =>
  i.addEventListener("focus", (e) => e.target.select())
);

function handleClick(e) {
  if (e.target.id === "btn-stop") {
  }

  if (e.target.id === "btn-start") {
    // timerStart();
  }

  if (e.target.id === "btn-pause") {
  }

  if (e.target.id === "btn-setting") {
  }
}

function handleMousedown(e) {
  if (e.target.id !== "btn-setting") {
    e.target.setAttribute("disabled", "");
  }

  if (e.target.id === "btn-stop") {
    timerStopUI();
    timerStop();
    showScreenTime();
  }

  if (e.target.id === "btn-start") {
    timerStart();
    [btnStop, btnPause].forEach((btn) => {
      btn.removeAttribute("disabled", "");
    });
  }

  if (e.target.id === "btn-pause") {
    timerPauseUI();
    timerPause();
  }

  if (e.target.id === "btn-setting") {
    btnSetting.classList.add("btn--clicked");
  }
}

function handleMouseup(e) {
  if (e.target.id === "btn-stop") {
    timerStop();
  }

  if (e.target.id === "btn-start") {
  }

  if (e.target.id === "btn-pause") {
  }

  if (e.target.id === "btn-setting") {
    btnSetting.classList.remove("btn--clicked");
    timerSetting();
  }
}

function timerStopUI() {
  // 彈起所有按鈕
  btnStart.removeAttribute("disabled", "");
  btnPause.setAttribute("disabled", "");
}

function timerPauseUI() {
  btnStart.removeAttribute("disabled", "");
}

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
