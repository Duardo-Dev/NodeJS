const express = require('express');
const router = express.Router();
const  imgModel = require('../Controllers/imageproductController');

router.post('/images-create', imgModel.createImage);
router.get('/teste', imgModel.getalltenis)

module.exports = router;
