const express = require('express');
const { createMatch, getMatches, updateMatch } = require('../controllers/matchController');

const router = express.Router();

router.post('/', createMatch);
router.get('/', getMatches);
router.put('/:id', updateMatch);

module.exports = router;
