# Simple-timer
簡易的倒數計時器。

## Demo
https://crecpz.github.io/simple-timer/

<img src="https://user-images.githubusercontent.com/81663340/204438380-5f76c096-7cf8-4fcc-9e30-52bc2a05ce00.png" width="30%"/>

## 介紹
- 使用 JavaScript 開發。
- 使用 SCSS 管理樣式。
- 使用 localStorage 儲存使用者設定的時間。
- 倒數計時寫法說明：
  - 在按下開始倒數的當下，使用 `Date.now()` 獲取時間戳記（timestamp），並以此作為**初始時間戳記**。
  - 使用 `setInterval()`，每秒獲取**新時間戳記**，並利用**新時間戳記**減去**初始時間戳記**，來計算開始倒數以來所經過的時間。
  - 一旦經過的時間大於（或等於）使用者所設定的時間，即代表時間到。
  - 透過每秒獲取新的時間戳記的方式來計算時間，能取得相對準確的時間，避免掉直接使用 `setInterval()` 或  `setTimeout()` 計時所帶來的誤差。
