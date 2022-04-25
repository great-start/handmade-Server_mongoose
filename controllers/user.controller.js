
const users = [
    {id: 1, name: 'Vanya'},
    {id: 2, name: 'Tolya'},
    {id: 3, name: 'Vadim'},
];

const getUser = (req, res) => {
    // res.writeHead(200,{
    //     'Content-Type': 'application/json'
    // })

    if (req.params.id) {
        res.send(users.find((user) => user.id === Number(req.params.id)));
        return;
    }

    res.send(users);
}

const createUser = (req, res) => {
    const user = req.body;
    users.push(user);

    res.send(users);
}

module.exports = {
    getUser,
    createUser
}