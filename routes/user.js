const express = require('express');
const router = express.Router();
const { handleGetallUsers, handlegetUserById, handleUpdateUserById, handleDeleteUserById, handleCreateNewUser } = require('../controllers/user');

router.route('/')
.get(handleGetallUsers)
.post(handleCreateNewUser);

router
.route('/:id').get(handlegetUserById)
.patch(handleUpdateUserById)
.delete(handleDeleteUserById);

module.exports = router;