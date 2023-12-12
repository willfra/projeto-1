const buttonContact = document.getElementById("contact");
const closeButton = document.getElementById("closeButton");

const flipcard = document.querySelector(".flip-card-inner");

buttonContact.addEventListener("click", function () {
    flipcard.classList.toggle("fliped");
});
closeButton.addEventListener("click", function () {
    flipcard.classList.toggle("fliped");
});
