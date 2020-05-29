var express=require('express')
var bodyParser=require('body-parser')
var myPostReq=bodyParser.urlencoded({extended: false})

var app=express()
app.use(express.static(__dirname+'/public'))
app.set('view engine','ejs')
app.set('views',__dirname+'/views')

app.get('/',function(req,res){
    res.render('FormForPost')
})

app.post('/index',myPostReq,function(req,res){
    res.render('index',{qs:req.body})
})

app.listen(9000)