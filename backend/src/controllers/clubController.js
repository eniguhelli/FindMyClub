const { searchClubs, getClubById } = require('../services/api');

const getClubByName = async (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ error: 'Club name is required' });
        }

        const clubs = await searchClubs(name);
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clubs' });
    }
};

const getClubByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const club = await getClubById(id);
        res.json(club);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch club by ID' });
    }
};

module.exports = { getClubByName, getClubByIdController };