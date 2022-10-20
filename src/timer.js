const timeWrapper = document.querySelector('#time-wrapper');

// 設定的時間(分, 秒)
let setMinute = 3;
let setSecond = 60;

let totalSecond = setMinute * 60 + setSecond;
const timer = setInterval(countdown, 1000);

function countdown(){
  let minute = Math.floor(totalSecond / 60);
  let second = totalSecond % 60;
  totalSecond--;

  if(totalSecond < 0){
    clearInterval(timer)
  }

  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  timeWrapper.innerHTML = `${minute} : ${second}`
}
