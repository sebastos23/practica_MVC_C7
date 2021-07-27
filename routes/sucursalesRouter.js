var express = require('express');
var router = express.Router();
let controller = require('../controllers/sucursalesController')

/* GET home page. */
router.get('/', controller.index );
router.get('/:sucursal', controller.sucursal)

module.exports = router;