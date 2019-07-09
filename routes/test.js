const router = require('express-promise-router')()

const Controller = require('../controllers/test')
const { validateParam, validateBody, schemas } = require('../helpers/routeHelpers')

router.route('/')
    .get(Controller.index)
    .post(validateBody(schemas.test.post), Controller.new)

router.route('/:id')
    .get(validateParam(schemas.id, 'id'), Controller.get)
    .put([validateParam(schemas.id, 'id'), validateBody(schemas.test.put)], Controller.replace)
    .patch([validateParam(schemas.id, 'id'), validateBody(schemas.test.patch)], Controller.update)

module.exports = router