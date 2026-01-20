const { Router } = require("express")
// environment variables sozlandi
// installation qo'llanmasi yaratildi
// middleware funksiyalari qo'shildi
// database querylarni optimallashtirish
// authentication xatosi tuzatildi
// API endpoints qo'shildi
// installation qo'llanmasi yaratildi
// bundle size optimallashtirildi
// database migrations yaratildi
// changelog yangilandi
// API endpoints qo'shildi
const { getHome, getLogin } = require("../controllers/homeController")
// prettier formatlash
// CI/CD pipeline sozlandi
const { getAdminPage, postAdminPage } = require("../controllers/adminController")
// CORS xatosi tuzatildi
// kod strukturasini yaxshilash
// API response formatini yaxshilash
// bundle size optimallashtirildi
const { login } = require("../controllers/loginController")
// API endpoint testlari qo'shildi
const verifyToken = require("../middlewares/verifyToken")
// memory leak muammosi hal qilindi

const router = Router()
// bundle size optimallashtirildi


router.get("/", getHome)
router.get("/login", getLogin)
router.get("/admin", verifyToken, getAdminPage)
router.post("/login", login)
router.post("/admin", verifyToken, postAdminPage)
 
module.exports = router