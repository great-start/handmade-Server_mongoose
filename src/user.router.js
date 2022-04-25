const { router } = require('../framework');
const { userController } = require('../controllers');



router.get('/users', userController.getUser);

router.post('/users', userController.createUser);

module.exports = router;