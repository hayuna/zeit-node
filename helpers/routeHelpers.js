import Joi from 'joi'

export const validateParam = (schema, name) => {
    return (req, res, next) => {
        const result = Joi.validate({ param: req.params[name] }, schema)
        if(result.error) {
            return res.status(400).json(result.error)
        }else{
            if(!req.value) req.value = {}
            if(!req.value.params) req.value.params = {}
            req.value.params[name] = result.value.param
            next()
        }
    }
}
 
export const validateBody = schema => {
    return (req, res, next) => {
        const result = Joi.validate(req.body, schema)
        if(result.error){
            return res.status(400).json(result.error)
        }else{
            if(!req.value) req.value = {}
            if(!req.value.body) req.value.body = {}
            req.value.body = result.value
            next()                
        }
    }
}

export const schema = {
    test: {
        post: Joi.object().keys({
            name: Joi.string().required()
        }),
        put: Joi.object().keys({
            name: Joi.string().required()
        }),
        patch: Joi.object().keys({
            name: Joi.string()
        })
    },
    id: Joi.object().keys({
        param: Joi.string().regex(/^[0-9a-fA-Z]{24}$/).required()
    })
}