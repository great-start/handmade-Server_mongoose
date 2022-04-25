
// const users = [
//     {id: 1, name: 'Vanya'},
//     {id: 2, name: 'Tolya'},
//     {id: 3, name: 'Vadim'},
// ];

// const getUser = (req, res) => {
//
//     if (req.params.id) {
//         res.send(users.find((user) => user.id === Number(req.params.id)));
//         return;
//     }
//
//     res.send(users);
// }
//
// const createUser = (req, res) => {
//     const user = req.body;
//     users.push(user);
//
//     res.send(users);
// }

const Users = require('../models/user.models');

const getUser = async (req, res) => {
    let users;

    if (req.params.id) {
        users = await Users.findById(req.params.id);
    } else {
        users = await Users.find();
    }

    res.send(users);
}

const createUser = async (req, res) => {

    const user = req.body;
    await Users.create(user);

    res.send(await Users.find());
}

module.exports = {
    getUser,
    createUser
}