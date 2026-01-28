const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const api = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: { 'X-Auth-Token': process.env.FOOTBALL_API_KEY },
});

const searchClubs = async (name) => {
    const response = await api.get('/teams', {
        params: { name }
    });
    return response.data.teams;
};

const getClubById = async (id) => {
    const response = await api.get(`/teams/${id}`);
    return response.data;
};

const getLeagues = async (competitionId) => {
    const response = await api.get(`/competitions/${competitionId}`);
    return response.data.competitions;
}

const getClubsByLeague = async (leagueId) => {
    const response = await api.get(`/competitions/${leagueId}/teams`);
    return response.data.teams;
};

module.exports = { searchClubs, getClubById, getLeagues, getClubsByLeague }; 