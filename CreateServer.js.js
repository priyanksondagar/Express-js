const express=require('express')

const app= express()

app.listen(9000,function(req,res){
    console.log('Server is running.....')
})

app.get('/',function(req,res){
    res.send("For result,write mark")
})

app.get('/marks',function(req,res){
    const id1=req.query.id
    res.send('Yourr marks is : '+id1)
})

app.get('/marks/:id',function(req,res){
    const id=req.params.id
    res.send('Yourr marks is : '+id)
})

