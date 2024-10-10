const express = require('express');
const { createTag, getTags } = require('../controllers/tagController');
const router = express.Router();

router.post('/tags', createTag);
router.get('/tags', getTags);

module.exports = router;
