const express = require("express");
const router = express.Router();

const numbersController = require('../controllers/numbers')

router.get('/', numbersController.getFormGet)
router.get('/add', numbersController.getFormAdd)
router.get('/update', numbersController.getFormUpdate)
router.post('/add', numbersController.postRecord)
router.post('/update', numbersController.putRecord)
router.post('/delete', numbersController.deleteRecord)

module.exports = {
   numbersRouter: router
}