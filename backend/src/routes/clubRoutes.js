const express = require('express');
const clubController = require('../controllers/clubController');

const router = express.Router();

router.get('/', clubController.getClubByName);
router.get('/:id', clubController.getClubByIdController);
module.exports = router;