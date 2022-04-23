const { router } = require('../framework');


const users = [
    {id: 1, name: 'Vanya'},
    {id: 2, name: 'Tolya'},
    {id: 3, name: 'Vadim'},
];


router.get('/users', (req, res) => {
    // res.writeHead(200,{
    //     'Content-Type': 'application/json'
    // })
    res.send(users);
});

router.post('/users', (req, res) => {
    const user = req.body;
    users.push(user);

    res.send(users);
});

module.exports = router;