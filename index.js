let buttonPlus = document.querySelector(".counterPlus");
let buttonReset = document.querySelector(".counterReset");
let counterText = document.querySelector(".counterText");
let resetActive = document.querySelector(".js-counterReset");

let RESET_ACTIVE = "counterReset_active";
let counter = 0;
buttonPlus.addEventListener("click", function () {
   counter = counter + 1;
   counterText.innerText = counter;
   if (counter >= 1) {
      resetActive.classList.add(RESET_ACTIVE);
   }
});
buttonReset.addEventListener("click", function () {
   counter = 0;
   counterText.innerText = counter;
   resetActive.classList.remove(RESET_ACTIVE);
});
