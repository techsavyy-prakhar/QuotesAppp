const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/quoteApp-Live')
    .then(()=> console.log('quoteApp-Live DB connected'))
    .catch(err => console.log(err))


app.use(cors({origin: ['http://localhost:3000']}))
app.use(express.json());

const quoteRoutes = require('./APIs/quoteRoutes');

app.use(quoteRoutes);

app.get('/',(req,res)=>{
    res.send('Working Fine!');
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log('Server is Up at Port ', PORT);
});