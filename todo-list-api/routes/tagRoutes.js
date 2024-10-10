const express = require('express');
const { createTag, getTags, updateTag } = require('../controllers/tagController');
const router = express.Router();

router.post('/tags', createTag);
router.get('/tags', getTags);
router.put('/tags', updateTag);


module.exports = router;
