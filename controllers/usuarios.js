const {request,response}= require('express')

//funciones
const usuariosGet = (req =request, res=response)=> {
    const {limit,page} = req.query 
    res.json({mesagge: "GET usuarios", limit, page})    
    }
const usuarioPost = (req =request, res=response)=> {
    const {nombre,correo} = req.body
    res.json({mesagge: "POST usuarios", nombre, correo})    
    }
const usuariosPut = (req =request, res=response)=> {
    const {id} = req.params
    res.json({mesagge: "PUT usuarios", id})    
    }
const usuariosDelete = (req =request, res=response)=> {
    res.json({mesagge: "DELETE usuarios"})    
    }





    module.exports = {usuariosGet,usuarioPost,usuariosPut,usuariosDelete}