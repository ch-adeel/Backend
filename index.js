const express=require('express')
const cors=require('cors')
const {Connect}=require('./db/connection')
const User=require('./ApiRoutes/UserRoutes')
const app=express()


app.use(cors())
app.use(express.json())
app.use('/User',User)
Connect()

app.listen(8000,()=>
{
    console.log('server is in running form')
})