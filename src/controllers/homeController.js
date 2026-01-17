// API endpoints qo'shildi
const { readFile } = require("../utils/fs")
// type error tuzatildi
// API endpoints qo'shildi

// build konfiguratsiyasi sozlandi
// integration testlar yaratildi
// package.json yangilandi
// prettier formatlash
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

