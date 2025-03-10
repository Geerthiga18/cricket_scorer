const Match = require('../models/Match');

// Create a new match
const createMatch = async (req, res) => {
    const { teamA, teamB, overs } = req.body;
    try {
        const match = new Match({ teamA, teamB, overs, score: [] });
        await match.save();
        res.status(201).json(match);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all matches
const getMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.json(matches);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update match score
const updateMatch = async (req, res) => {
    const { runs, wickets, team } = req.body;
    try {
        const match = await Match.findById(req.params.id);
        if (!match) return res.status(404).json({ message: "Match not found" });

        match.score.push({ team, runs, wickets, balls: match.score.length + 1 });
        await match.save();

        res.json(match);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createMatch, getMatches, updateMatch };
