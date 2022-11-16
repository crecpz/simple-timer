import "./timer.js";
import "./ui.js";
import "./scss/style.scss";

window.addEventListener('DOMContentLoaded', ()=> {
  setTimeout(()=> {
    document.body.classList.remove('no-transition')
  }, 300)
})