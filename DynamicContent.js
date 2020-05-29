var express= require('express')

var app=express()
app.set('views',__dirname+'/views')
app.set('view engine','ejs')

app.get('/',function(req,res){
    res.render('home')
})

app.get('/profile/:name', function(req,res){
    var data={age:20, name:'priyank'}
    res.render('profile',{person: req.params.name,data:data})
});
app.listen(9000)
console.log('server is running.......')

