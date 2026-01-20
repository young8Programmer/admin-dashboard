// kod formatlash va indentatsiya
const jwt = require("jsonwebtoken")
// kod uslubini yaxshilash
// memory leak muammosi hal qilindi
// componentlarni qayta tashkilash
// API endpoints qo'shildi
// changelog yangilandi
// package.json yangilandi
// kod formatlash va indentatsiya
const sign =  (payload) => {
// installation qo'llanmasi yaratildi
// kod strukturasini yaxshilash
// changelog yangilandi
// README faylini yangilash
// ESLint qoidalariga moslashtirish
// shopping cart funksiyasi qo'shildi
// changelog yangilandi
// kod uslubini yaxshilash
// product catalog funksiyasi qo'shildi
// API endpoint testlari qo'shildi
    return jwt.sign(payload, "qwertyuiop")
}

const verify = (token) => {
    try {
// API endpoints qo'shildi
        return jwt.verify(token, "qwertyuiop")
// kod strukturasini yaxshilash
    } catch (error) {
      return {}
    }
}

module.exports = {
    sign,
    verify
}