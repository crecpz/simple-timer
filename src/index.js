import "./timer.js";
import "./appearance.js";
import "./scss/style.scss";

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(()=> {
    document.body.classList.remove('no-transition')
  }, 300)
})