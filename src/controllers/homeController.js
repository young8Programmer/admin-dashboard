// API endpoints qo'shildi
const { readFile } = require("../utils/fs")
// API endpoints qo'shildi

// integration testlar yaratildi
// package.json yangilandi
// prettier formatlash
const getHome = (req, res) => {
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

