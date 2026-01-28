const express = require('express');
const leagueController = require('../controllers/leagueController');

const router = express.Router();

router.get('/:competitionId', leagueController.getAllLeagues);
router.get('/:leagueId/teams', leagueController.getClubByLeagueController);
module.exports = router;