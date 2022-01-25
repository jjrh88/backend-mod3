const express = require('express'),
    router =  express.Router(),
    userCtrl = require('../controller/user.controller')

router.get('/', userCtrl.list)
router.post('/', userCtrl.create)

module.exports = router