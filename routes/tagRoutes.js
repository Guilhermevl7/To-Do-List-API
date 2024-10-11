const express = require('express');
const { createTag, getTags, updateTag, deleteTag } = require('../controllers/tagController');
const router = express.Router();

router.post('/tags', createTag);
router.get('/tags', getTags);
router.put('/tags/:id', updateTag);
router.delete('/tags/:id', deleteTag);


module.exports = router;
