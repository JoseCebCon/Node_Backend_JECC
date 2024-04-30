const express = require('express')
const router = express.Router()

const {getTareas, creatTareas, updateTareas, deleteTareas} = require('../controllers/tareasController')

router.route('/').get(getTareas).post(creatTareas)
//router.get('/', getTareas)
//router.post('/', creatTareas)

router.route('/:id').delete(deleteTareas).put(updateTareas)
//router.put('/:id', updateTareas)
//router.delete('/:id', deleteTareas)

module.exports = router 