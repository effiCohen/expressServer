import Joi from "joi"

export const addUserValid=(_reqBody)=>{
const validation=Joi.object({
    name:Joi.string().required().min(2).max(20),
    age:Joi.number().required().min(0).max(98),
    cuntry:Joi.string().required().min(2).max(5),
})
return validation.validate(_reqBody)
}
export const updateUserValid=(_reqBody)=>{
const validation=Joi.object({
    name:Joi.string().allow().min(2).max(8),
    age:Joi.number().allow().min(0).max(98),
    cuntry:Joi.string().allow().min(2).max(5),
})
return validation.validate(_reqBody)
}