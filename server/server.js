const mongoose = require('mongoose');
const express = require('express');
const app = express();

const port = 3000;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}

app.listen(port, () => {
    console.log(`server is working on ${port}!`);
})

const homeUserTypeSchema = new mongoose.Schema({
    name: String,

});

const homeUserSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String,
    type: homeUserTypeSchema,
});

const HomeUserType = mongoose.model('HomeUserType', homeUserTypeSchema);
const HomeUser = mongoose.model('HomeUser', homeUserSchema);

app.get('/', (req, resp) => {
    console.log(" it`s work")
    HomeUser.find((err, res) => {
        resp.send(res)

    })
})

app.get('/home/user/type', (req, resp) => {
    console.log(" it`s work")
    HomeUserType.find((err, res) => {
        resp.send(res)

    })
})

app.post('/home/user/type', (req, resp) => {
    console.log("post /home/user/type ")
    console.dir(req.header.arguments) 

    const nHomeUserType = new HomeUserType({
        name: req.header.name,
    })  
        
    nHomeUserType.save(
        (err, res) => {
        resp.send(res)

    })
})
