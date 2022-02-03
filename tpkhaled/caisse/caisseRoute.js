const express = require('express')
const {getAllCaisse, createCaisse} = require('./caisseController')
const router = express.Router()

//methode 1
const getallCaisse=router.route('/').get(getAllCaisse);
const postCaisse=router.route('/caisse').post(createCaisse);

//methode 2
router.get('/', getAllCaisse)
router.post('/',createCaisse)

//methode 3
router.route('/').get(getAllCaisse).post(createCaisse)

//methode 1
module.exports = {
    getallCaisse,
    postCaisse
}

//methode 2 & 3
module.exports = router