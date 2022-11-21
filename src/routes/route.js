const express = require('express');
const router = express.Router();

const collegeController = require ('../controllers/collegeController')



router.post('/colleges', collegeController.createCollege)
router.get('/functionup/collegeDetails', getCollege);



module.exports = router;
