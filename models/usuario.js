const {Schema,model} = require ("mongoose")

const UsuarioSchema = Schema ({
name:{
    type:String,
    required:[true, "el nombre es obligatorio"]
},
email: {
    type: String,
    required: [true, "el email es obligatorio"],
    unique: true,
},
password: {
    type: String,
    required: [true, "la contraseña es obligatoria"],
},
role: {
type: String,
enum: ["ADMIN_ROLE", "USER_ROLE"],
default: "USER_ROLE",
},
img:{
type: String,
},
state:{
type: Boolean,
default: true
}
})

module.exports=model("Usuario",UsuarioSchema)