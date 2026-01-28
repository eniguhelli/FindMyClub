const express = require('express');
const cors = require('cors');

const clubRoutes = require('./routes/clubRoutes');
const leagueRoutes = require('./routes/leagueRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/clubs', clubRoutes);
app.use('/leagues', leagueRoutes);

module.exports = app;