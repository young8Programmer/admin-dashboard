// validation xatolari tuzatildi
// componentlarni qayta tashkilash
// database querylarni optimallashtirish
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
// changelog yangilandi
const fistForm = document.getElementById("form1");
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
// componentlarni qayta tashkilash

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});
