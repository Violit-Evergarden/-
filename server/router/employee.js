const express = require('express')
const router = express.Router()
const employee_handler = require('../router_handler/employee')

router.post('/addEmployee',employee_handler.addEmployee)
router.post('/deleteEmployee',employee_handler.deleteEmployee)
router.post('/editEmployee',employee_handler.editEmployee)
router.get('/getEmployee',employee_handler.getEmployee)

module.exports = router