// * buttons
const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", handleClick);
  
});

function handleClick(e){
  console.log(1)
  console.log(e.target.id)
}