//express js

// const express = require('express');
// const app = express();
// app.get('/', function (req, res) {
//     res.send("hello nikul")
// }).listen(5000);

//-----------------end------------

//routing (new page colling )

// const express = require('express');
// const app = express();
// app.get('/', function (req, res) {
//     res.send("hello nikul")
// });
// app.get('/abc', function (req, res) {
//     res.send("hello abc")
// });
// app.post('/about', function (req, res) {   //(post method only for postmen run in link)
//     res.send("hello about")
// });
// app.listen(5000);

//-----------end---------

//middleware (user je page ma jay te page open thay te batave)
// const express = require('express');
// const app = express();
//
// const chackUrl = function(req,res,next){
//     console.warn("current rount is",req.originalUrl)
//     next();
// }
// app.use(chackUrl);
//
// app.get('/', function (req, res) {
//     res.send("hello nikul")
// });
// app.get('/abc', function (req, res) {
//     res.send("hello abc")
// });
// app.post('/about', function (req, res) {   //(post method only for postmen run in link)
//     res.send("hello about")
// });
// app.listen(5000);

//----end-------

// router middleware and (middleware ne biji file mathi call karav va mate)
// const express = require('express');
// const app =express();
// const router =express.Router();
// const urlChack=express('./middleware');
// // const urlChack=function (req,res,next) {
// //     console.log("current uri is",req.originalUrl);
// //     next();
// // }
// // app.use(urlChack)
// app.get('/',function (req,res) {
//     res.send("This is Home page")
// })
// router.get('/about',urlChack,function (req,res) {
//     res.send("This is about page")
// })
// router.get('/login',urlChack,function (req,res) {
//     res.send("This is login page")
// })
// app.use('/',router);
// app.listen(4500);

//////-------end---------------

// Open file with Router  (route uper file lode  kevi rite karvi)
// const express = require('express');
// const app =express();
// const router =express.Router();
// const urlChack=express('./middleware');
// // const urlChack=function (req,res,next) {
// //     console.log("current uri is",req.originalUrl);
// //     next();
// // }
// // app.use(urlChack)
// app.get('/',function (req,res) {
//     res.send("This is Home page")
// })
// router.get('/about',urlChack,function (req,res) {
//     // res.send("This is about page")
//     res.sendFile(__dirname+"/about.html")
// })
// router.get('/login',urlChack,function (req,res) {
//     // res.send("This is login page")
//     res.sendFile(__dirname+"/home.html")
//
// })
// app.use('/',router);
// app.listen(5000);
//---------end---------

//Template Engine (ejs)
const express = require('express');
const app =express();
app.set('view engine','ejs');
app.get('/profile/:name',function (req,res) {
    console.warn(req.params.name)
    res.render('profile',{name:req.params.name})
    //res.sendFile(__dirname+'/home.html')
});
app.listen(4500);
//------------end--------

