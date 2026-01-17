// user authentication qo'shildi
// component testlari yaratildi
// ESLint qoidalariga moslashtirish
// caching mexanizmi qo'shildi
// API endpoints qo'shildi
// memory leak muammosi hal qilindi
// image optimization qo'shildi
// ESLint qoidalariga moslashtirish
// database querylarni optimallashtirish
// kod uslubini yaxshilash
// database migrations yaratildi
const { readFile } = require("../utils/fs")
// database testlari qo'shildi
// type error tuzatildi
const { verify } = require("../utils/jwt")

// bundle size optimallashtirildi
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

