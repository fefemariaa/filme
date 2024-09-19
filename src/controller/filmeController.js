import { Router } from "express";
const endpoints = Router()
import salvarFilme from "../repository/filmeRepository.js";


endpoints.post ('/filme/', async (req,resp)=>{
    let obj = req.body
    let id = await salvarFilme(obj)


    resp.send({
        id:id
    })

})

export default endpoints