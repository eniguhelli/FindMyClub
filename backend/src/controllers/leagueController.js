const { getLeagues, getClubsByLeague } = require('../services/api');

const getAllLeagues = async (req, res) => {
    try {
        const competitionId = req.params.competitionId;
        const leagues = await getLeagues(competitionId);
        res.json(leagues);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch leagues' });
    }   
};

const getClubByLeagueController = async (req, res) => {
    try {
        const leagueId = req.params.leagueId;
        const clubs = await getClubsByLeague(leagueId);
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clubs by league' });
    }
};

module.exports = { getAllLeagues, getClubByLeagueController };