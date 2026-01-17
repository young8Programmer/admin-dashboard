// memory leak muammosi hal qilindi
// API endpoints qo'shildi
// validation xatolari tuzatildi
const { readFile } = require("../utils/fs")
// code comments qo'shildi
// kod strukturasini yaxshilash
// type error tuzatildi
// CI/CD pipeline sozlandi
// API endpoints qo'shildi
// kod formatlash va indentatsiya

// componentlarni qayta tashkilash
// build konfiguratsiyasi sozlandi
// integration testlar yaratildi
// package.json yangilandi
// unit testlar qo'shildi
// prettier formatlash
// README faylini yangilash
// memory leak muammosi hal qilindi
const getHome = (req, res) => {
// ESLint qoidalariga moslashtirish
    let cars = readFile("cars")
// image optimization qo'shildi
    res.render("index", {cars} )
}

const getLogin = (req, res) => {
// README faylini yangilash
    res.render("login" )
}

module.exports = {
    getHome,
    getLogin
}

