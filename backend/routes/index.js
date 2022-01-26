const { Router } = require('express'),
    router = Router()

router.use('/user', require('./user.route'))


module.exports = router