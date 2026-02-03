const { searchClubs, getClubById, getClubs } = require('../services/api');

const getClubByName = (req, res) => {
    try {
        const { name } = req.query;

        if (!name) {
            return res.status(400).json({ error: 'Club name is required' });
        }

        const clubs = searchClubs(name);
        res.json(clubs);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch clubs' });
    }
};

const getAllClubs = (req, res) => {
    try {
        const clubs =  getClubs();
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

module.exports = { getClubByName, getClubByIdController, getAllClubs };