const {request,response}= require('express')
const Usuario = require('../models/usuario')
const bcrypt = require('bcryptjs')

//funciones
const usuariosGet = (req =request, res=response)=> {
    const {limit,page} = req.query 
    res.json({mesagge: "GET usuarios", limit, page})    
    }
const usuarioPost = async (req =request, res=response)=> {
    const {name, email, password, role} = req.body
    const usuario = new Usuario({name, email, password, role})
    //validar si el email existe
    const existeEmail = await Usuario.findOne({email})
    if(existeEmail){
        return res.status(400).json({msg: `El correo ${email} ya esta registrado`})
    }
 //encripto la clave
 const salt = bcrypt.genSaltSync()
 usuario.password = bcrypt.hashSync(password, salt)
//guardo los datos
    await usuario.save()
    res.status(201).json({mesagge: "Usuario Creado", 
usuario  
})    
    }
const usuariosPut = (req =request, res=response)=> {
    const {id} = req.params
    res.json({mesagge: "PUT usuarios", id})    
    }
const usuariosDelete = (req =request, res=response)=> {
    res.json({mesagge: "DELETE usuarios"})    
    }





    module.exports = {usuariosGet,usuarioPost,usuariosPut,usuariosDelete}