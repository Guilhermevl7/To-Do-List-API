const express = require('express');
const { createTag, getTags, updateTag, deleteTag } = require('../controllers/tagController');
const { authMiddleware } = require('../controllers/loginController')

const router = express.Router();

router.post('/tags', authMiddleware, createTag);
router.get('/tags', authMiddleware, getTags);
router.put('/tags/:id', authMiddleware, updateTag);
router.delete('/tags/:id', authMiddleware, deleteTag);


module.exports = router;
