const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
    matchId: { type: mongoose.Schema.Types.ObjectId, ref: "Match", required: true },
    team: { type: String, required: true },
    runs: { type: Number, required: true },
    wickets: { type: Number, required: true },
    balls: { type: Number, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Score', scoreSchema);
