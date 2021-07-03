const express=require('express');
const router=express.Router();
const profile=require('../controllers/users_controller')
const posts_controller=require('../controllers/posts_constroller');


router.get('/',profile.users);
router.get('/posts',posts_controller.posts);
module.exports=router;