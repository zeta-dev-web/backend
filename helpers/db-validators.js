const Role = require("../models/role")

const esRolValido = async(role)=>{
    const existeRole= await Role.findOne({role}) 
    if(!existeRole){
throw new Error(`el rol ${role} no esta registrado en la base de datos`)
}} 

module.exports = {esRolValido}