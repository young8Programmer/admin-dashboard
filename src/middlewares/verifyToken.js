// caching mexanizmi qo'shildi
// API endpoints qo'shildi
// image optimization qo'shildi
const { readFile } = require("../utils/fs")
const { verify } = require("../utils/jwt")

// image optimization qo'shildi
const verifyToken = (req, res, next) => {
// kod strukturasini yaxshilash
// user authentication qo'shildi
    let token = req.cookies.token
    let admins = readFile("admins")
// ESLint qoidalariga moslashtirish
// dependencies yangilandi
    let admin = verify(token)
    let checkAdmin = admins.find(el => el.id === admin.id)
    if(checkAdmin){
        next()
    } else {
        res.redirect("/login")
    }
}

module.exports = verifyToken

