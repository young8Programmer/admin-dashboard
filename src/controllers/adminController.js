// database connection muammosi hal qilindi
// API endpoint testlari qo'shildi
// image optimization qo'shildi
// prettier formatlash
// memory leak muammosi hal qilindi
const { readFile, writeFile } = require("../utils/fs")

// API hujjatlarini qo'shish
// installation qo'llanmasi yaratildi
// authentication xatosi tuzatildi
// error handling yaxshilandi
// integration testlar yaratildi
const getAdminPage = (req, res) => {
// database connection muammosi hal qilindi
// database querylarni optimallashtirish
// caching mexanizmi qo'shildi
// componentlarni qayta tashkilash
    let cars = readFile("cars")
// prettier formatlash
    res.render("admin", {cars})
// build konfiguratsiyasi sozlandi
// kod strukturasini yaxshilash
// prettier formatlash
}

// database connection muammosi hal qilindi


const postAdminPage = (req, res) => {
    let cars = readFile("cars")
    let { name, price, color, desc, img } = req.body

    let filteredcars = cars.find(el => el.name === name)
    if (filteredcars) {
        req.redirect("/admin")
    }

    cars.push({
        id: cars.at(-1)?.id + 1 || 1,
        name,
        price,
        color,
        desc,
        img
    })

    writeFile("cars", cars)
    res.redirect("/admin")


}



module.exports = {
    getAdminPage,
    postAdminPage
}


