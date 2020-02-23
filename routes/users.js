
const router=require('express-promise-router')();
const usersController=require('../controllers/users')

router.use(function(req,res,next)
{
    console.log(req.url,'middleware for only /users');
    next();

})
router.route('/register').post(usersController.signUp);
router.route('/login').post(usersController.signIn);
router.route('/secret').get(usersController.secret);


module.exports=router;