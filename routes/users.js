
const router=require('express-promise-router')();
const usersController=require('../controllers/users')

router.use(function(req,res,next)
{
    console.log(req.url,'middleware for only /users');
    next();

})
router.route('/signup').post(usersController.signUp);
router.route('/signin').post(usersController.signIn);
router.route('/secret').get(usersController.secret);


module.exports=router;