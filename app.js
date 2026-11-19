let btn = document.getElementById("changeBtn");
let input = document.getElementById("colorCode");

btn.addEventListener("click", function() {

  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);

  let rgbColor = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = rgbColor;

  input.value = rgbColor;

});
