let controllerUser = require('./controllers/userController');


let router = require('express').Router();

router.get("/",function(req,res){
    res.json({
        status: 'API is working',
        message: 'Welcome to the API'
    });
});

//router for the signup endpoint
router.post('/signup', controllerUser.signUp);


module.exports = router;