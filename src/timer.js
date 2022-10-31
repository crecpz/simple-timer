const timeWrapper = document.querySelector("#time-wrapper");
const storageTotalSecond = JSON.parse(localStorage.getItem("totalSecond")) || 0;
export let totalSecond = storageTotalSecond;

// 畫面載入時，先調用 showTime() 來顯示目前設定的時間 
showTime();

// * 計時開始
export function timerStart() {
  const countdown = () => {
    totalSecond--;
    if (totalSecond <= 0) {
      clearInterval(timer);
    }
    showTime();
  };
  const timer = setInterval(countdown, 1000);
}

// * 將 totalSecond 的秒數轉換成分與秒，顯示到畫面中
export function showTime() {
  let minute = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`;
}

// * 取得使用者設定的時間，並更新 totalSecond 變量
export function settingTime() {
  // 取得使用者在 #setting-modal 中設定的 DOM，並計算出總秒數
  const settingMin = document.querySelector("#setting-minute");
  const settingSec = document.querySelector("#setting-second");
  totalSecond = Number(settingMin.value) * 60 + Number(settingSec.value);
}



// ! 勿動
// const timer = setInterval(countdown, 1000);
// function countdown() {
//   let minute = Math.floor(totalSecond / 60);
//   let second = totalSecond % 60;
//   totalSecond--;

//   if (totalSecond < 0) {
//     clearInterval(timer);
//   }

//   minute = minute < 10 ? "0" + minute : minute;
//   second = second < 10 ? "0" + second : second;
//   timeWrapper.innerHTML = `${minute} : ${second}`;
// }