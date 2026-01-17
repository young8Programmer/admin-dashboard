const express = require("express")
const cookiParser = require("cookie-parser")
const path  = require("path")
const router = require("./src/routes")

// kod formatlash va indentatsiya
// CORS xatosi tuzatildi
// database testlari qo'shildi

const app = express()

app.set("view engine", "ejs")
// middleware funksiyalari qo'shildi
// kod uslubini yaxshilash
app.set("views", path.join(process.cwd(), "src", "views"))
app.use(express.static(path.join(process.cwd(), "src", "public")))
app.use(express.urlencoded({extended: true}))
app.use(cookiParser())

app.use(router)

app.listen(9000, () => {
    console.log(9000);
})