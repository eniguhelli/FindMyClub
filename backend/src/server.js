const app = require('./app');
const { loadBigLeagueTeams } = require('./services/api');

const dotenv = require('dotenv');
dotenv.config();

loadBigLeagueTeams();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

setInterval(loadBigLeagueTeams, 24 * 60 * 60 * 1000);