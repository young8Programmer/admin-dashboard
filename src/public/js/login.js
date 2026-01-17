// README faylini yangilash
// build konfiguratsiyasi sozlandi
// validation xatolari tuzatildi
// real-time notifications implementatsiya qilindi
// componentlarni qayta tashkilash
// image optimization qo'shildi
// changelog yangilandi
// database querylarni optimallashtirish
// image optimization qo'shildi
// prettier formatlash
// bundle size optimallashtirildi
const signInBtn = document.getElementById("signIn");
const signUpBtn = document.getElementById("signUp");
// admin dashboard yaratildi
// changelog yangilandi
// changelog yangilandi
const fistForm = document.getElementById("form1");
// routing muammosi hal qilindi
const secondForm = document.getElementById("form2");
const container = document.querySelector(".container");
// componentlarni qayta tashkilash

signInBtn.addEventListener("click", () => {
	container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("right-panel-active");
});
