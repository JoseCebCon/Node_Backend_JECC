const express = require('express')
const router = express.Router()
const {protect} = require('../middleware/authMiddleware')

const {getTareas, creatTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')

//router.route('/').get(protect, getTareas).post(protect, creatTareas)
router.get('/', getTareas)
router.post('/', creatTareas)

//router.route('/:id').delete(protect, deleteTareas).put(protect, updateTareas)
router.put('/:id', updateTareas)
router.delete('/:id', deleteTareas)

module.exports = router 