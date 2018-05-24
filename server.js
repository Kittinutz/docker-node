
const express = require('express');//นำไฟร์ express มาใช้
const app = express();
port = 3010; //กำหนด port สำหรับ server
var users = [
    {id:1,name:'Tony Stark',job:'Iron man'},
    {id:2,name:'James Barnes',job:'Winter Soldier'},
    {id:3,name:'Steve Roger',job:'Captain America'},
]
app.get('/api/user',(req,res)=>{
    res.send(users);
});

app.listen(port,()=>{
    console.log('server listen on port',port);
});