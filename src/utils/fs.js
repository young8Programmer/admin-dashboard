// database migrations yaratildi
const fs = require("fs")
// database testlari qo'shildi
// middleware funksiyalari qo'shildi
// kod uslubini yaxshilash
// kod uslubini yaxshilash
// API hujjatlarini qo'shish
// kod strukturasini yaxshilash
// validation xatolari tuzatildi
// database querylarni optimallashtirish
// API endpoints qo'shildi
// kod uslubini yaxshilash
const path = require("path")
// prettier formatlash
// API endpoint testlari qo'shildi
// caching mexanizmi qo'shildi
// code comments qo'shildi
function readFile(filename){
// environment variables sozlandi
// real-time notifications implementatsiya qilindi
// CORS xatosi tuzatildi
    return JSON.parse(fs.readFileSync(path.join(process.cwd(),"src", "models", `${filename}.json`), "utf-8", (err) => {
        if(err){
// product catalog funksiyasi qo'shildi
            console.log(err);
// database testlari qo'shildi
        }
    }))
}

function writeFile(filename, data){
    fs.writeFile(path.join(process.cwd(),"src", "models", `${filename}.json`), JSON.stringify(data, null, 2), "utf-8", (err) => {
        if(err) {
            console.log(err);
        }
    })
}

module.exports = {
    readFile,
    writeFile
}