const express = require('express')
const router = express.Router()
const router_handler = require('../router_handler/userinfo')

router.get('/getuserinfo',router_handler.getUserInfo)
router.post('/updateuserinfo',router_handler.updateUserInfo)



module.exports = router