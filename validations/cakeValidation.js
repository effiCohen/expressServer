import Joi from "joi"

export const addCakeValid=(_reqBody)=>{
const validation=Joi.object({
    name:Joi.string().required().min(2).max(20),
    price:Joi.number().required().min(0).max(98),
    category:Joi.string().required().min(2).max(5),
})
return validation.validate(_reqBody)
}
export const updateCakeValid=(_reqBody)=>{
const validation=Joi.object({
    name:Joi.string().allow().min(2).max(8),
    price:Joi.number().allow().min(0).max(98),
    category:Joi.string().allow().min(2).max(5),
})
return validation.validate(_reqBody)
}