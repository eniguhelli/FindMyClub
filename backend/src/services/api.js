const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const api = axios.create({
  baseURL: 'https://api.football-data.org/v4',
  headers: { 'X-Auth-Token': process.env.FOOTBALL_API_KEY },
});

const BIG_LEAGUES = process.env.BIG_LEAGUES ? process.env.BIG_LEAGUES.split(',') : [];

let bigLeagueTeamsCache = [];

const loadBigLeagueTeams = async () => {
  try {
    const results = await Promise.all(
      BIG_LEAGUES.map(code => api.get(`/competitions/${code}/teams`))
    );

    bigLeagueTeamsCache = results
      .flatMap(res => res.data.teams)
      .filter(
        (team, index, self) =>
          index === self.findIndex(t => t.id === team.id)
      );

    console.log('Big-league teams loaded:', bigLeagueTeamsCache.length);
  } catch (error) {
    console.error('Failed to load big-league teams:', error);
  }
};

const searchClubs = (name) => {
  if (!bigLeagueTeamsCache.length) return [];
  const q = name.toLowerCase();
  return bigLeagueTeamsCache.filter(team =>
    team.name.toLowerCase().includes(q)
  );
};

const getClubById = async (id) => {
    const response = await api.get(`/teams/${id}`);
    return response.data;
};

const getClubs = async () => {
    const response = await api.get('/teams');
    return response.data.teams;
}

const getLeagues = async (competitionId) => {
    const response = await api.get(`/competitions/${competitionId}`);
    return response.data.competitions;
}

const getClubsByLeague = async (leagueId) => {
    const response = await api.get(`/competitions/${leagueId}/teams`);
    return response.data.teams;
};

module.exports = { searchClubs, getClubById, getLeagues, getClubsByLeague, getClubs, loadBigLeagueTeams }; 