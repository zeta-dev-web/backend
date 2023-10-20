const {Router} = require("express")
const router = Router()
const {usuariosGet, usuarioPost, usuariosPut, usuariosDelete} = require("../controllers/usuarios")



router.get("/", usuariosGet)
router.post("/", usuarioPost)
router.put("/:id", usuariosPut)
router.delete("/", usuariosDelete)

    module.exports = router