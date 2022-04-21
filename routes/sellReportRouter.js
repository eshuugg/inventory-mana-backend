const sellReportController = require('../controllers/sellReportController')

const router = require('express').Router()


router.get('/get/:id', sellReportController.getSellReport)

router.post('/add', sellReportController.addSellReport)

module.exports = router;

