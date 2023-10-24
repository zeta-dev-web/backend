const {Router} = require("express")
const router = Router()
const {check} = require("express-validator")
const {usuariosGet, usuarioPost, usuariosPut, usuariosDelete} = require("../controllers/usuarios")
const { validarCampos } = require("../middlewares/validar-campos")
const {esRolValido} = require("../helpers/db-validators")


router.get("/", usuariosGet)
router.post("/",
[
check("name","el nombre es obligatorio").notEmpty(),
check("email","el email no es válido").isEmail(),
check("password","la contraseña debe tener mas de 6 caracteres").isLength({min:6}), 
check("role").custom(esRolValido),
validarCampos,
], 
usuarioPost
)
router.put("/:id",usuariosPut)
router.delete("/",usuariosDelete)

    module.exports = router