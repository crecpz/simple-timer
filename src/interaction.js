import { settingTime, timer, timerStart, showTime, totalSecond, storageTotalSecond, timerStop } from "./timer";

// * buttons
const btns = document.querySelectorAll(".btn");
const btnStop = document.querySelector("#btn-stop");
const btnStart = document.querySelector("#btn-start");
const btnPause = document.querySelector("#btn-pause");
const btnSetting = document.querySelector("#btn-setting");
const cancelBtn = document.querySelector("#cancel-btn");
const okBtn = document.querySelector("#ok-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
  btn.addEventListener("mousedown", handleMousedown);
  btn.addEventListener("mouseup", handleMouseup);
});

[cancelBtn, okBtn].forEach((btn) =>
  btn.addEventListener("click", (e) => {
    closeModalOverlay()

    if (e.target.id === "cancel-btn") {

    }

    if (e.target.id === "ok-btn") {
      settingTime();
      showTime();
      localStorage.setItem('totalSecond', JSON.stringify(totalSecond));
    }
  })
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
    showTime();
  }

  if (e.target.id === "btn-start") {
    timerStart();
    [btnStop, btnPause].forEach((btn) => {
      btn.removeAttribute("disabled", "")
    });
  }

  if (e.target.id === "btn-pause") {
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

function timerPause() {
  clearInterval(timer);
  btnStart.removeAttribute("disabled", "");
}

function timerSetting() {
  openModalOverlay();
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
