const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    tournamentName: { type: String, required: true },
    teamA: { type: String, required: true },
    teamB: { type: String, required: true },
    overs: { type: Number, required: true },
    status: { type: String, enum: ["scheduled", "ongoing", "completed"], default: "scheduled" },
    scores: [
        {
            team: String,
            runs: Number,
            wickets: Number,
            balls: Number
        }
    ],
}, { timestamps: true });

module.exports = mongoose.model('Match', matchSchema);
