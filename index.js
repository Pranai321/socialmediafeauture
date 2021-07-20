const express=require('express');
const port=8000;
const router=require('./routes/index');
const app=express();
const expresslayouts=require('express-ejs-layouts')
const db=require('./config/mongoose')

app.use(express.static('./assets'));    

//app uses expresslayouts to use layouts
app.use(expresslayouts);
app.set('layout extractStyles',true);
app.set('layout extractScripts', true);
//expresslayouts should be called before router because router needs to know that views are using layouts

app.use('/',router);
app.set('view engine','ejs');
app.set('views','./views');



app.listen(port,function(err){
    if(err){
        console.log(`error firing up the server , ${err}`);
        return;
    }
    console.log(`server is up and running on port: ${port}`);
})