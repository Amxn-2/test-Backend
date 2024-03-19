const { ConnectionStates } = require('mongoose');
const User = require('../models/user')

async function handleGetallUsers(req, res) {
    const allDbUsers = await User.find({});
    return res.json(allDbUsers);
}

async function handlegetUserById(req, res) {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "user not found!"});
    return res.json(user);
}

async function handleUpdateUserById(req, res) {
    await User.findByIdAndUpdate(req.params.id, { lastName: 'Sharma' })
    return res.json({ Status: "Success"});
}

async function handleDeleteUserById(req, res) {
    await User.findByIdAndDelete(req.params.id)
    return res.json({ Status: "Success"});
}

async function handleCreateNewUser(req, res) {
    const body = req.body;
    if (
        !body || 
        !body.first_name || 
        !body.last_name || 
        !body.email || 
        !body.gender
        ){
        return res.status(400).json("All fields are required");
    }

    const result = await User.create({
        firstName: body.first_name,
        lastName: body.last_name,
        email: body.email,
        gender: body.gender,
    });
    console.log(result);
    return res.status(201).json({ msg: "Success", id: result._id })
}

module.exports = {
    handleGetallUsers,
    handlegetUserById,
    handleUpdateUserById,
    handleDeleteUserById,
    handleCreateNewUser
};