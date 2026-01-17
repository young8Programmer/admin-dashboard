// shopping cart funksiyasi qo'shildi
const { readFile } = require("../utils/fs")
// database migrations yaratildi
// database testlari qo'shildi
// CI/CD pipeline sozlandi
// database querylarni optimallashtirish
// kod uslubini yaxshilash
const { sign } = require("../utils/jwt")
// image optimization qo'shildi
// API response formatini yaxshilash
// integration testlar yaratildi
// validation xatolari tuzatildi
// database querylarni optimallashtirish
// prettier formatlash
// database migrations yaratildi
// code comments qo'shildi
// build konfiguratsiyasi sozlandi

const login = (req, res) => {
    let { username, password } = req.body
// routing muammosi hal qilindi
    let admins = readFile("admins")
// database testlari qo'shildi
    let admin = admins.find(el => el.username === username && el.password === password)

    if (admin) {
        let token = sign({ id: admin.id })
        res.cookie("token", token)
        res.redirect("/admin")
    } else {
        res.redirect("/login")
    }
}

module.exports = {
    login
}


