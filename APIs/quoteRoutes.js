const express = require('express');
const router = express.Router();
const Quote = require('../models/Quote');

router.get('/quotes', async (req, res)=>{
    try {
        const quotes = await Quote.find({});
        res.status(200).json(quotes);
    } 
    catch (err) {
        res.status(400).json({msg:'Something went wrong!!'})
    }
});

router.get('/quotes/:id', async (req, res)=>{
    try {
        const {id} = req.params;
        const quote = await Quote.findById(id);

        res.status(200).json(quote);
    } 
    catch (err) {
        res.status(400).json({msg:'Something went wrong!!'})   
    }
})

router.post('/quotes', async (req, res)=>{
    try {
        const {text, author, photo} = req.body;
        await Quote.create({text, author, photo});

        res.status(201).json({msg:'successfully create quote'});
    } 
    catch (err) {
        res.status(400).json({msg:'Something went wrong!!'})   
    }
})

router.delete('/quotes/:id', async (req, res)=>{
    try{
        const {id} = req.params;
        await Quote.findByIdAndDelete(id);
        res.status(202).json({msg:'successfully delete quote'});
    }
    catch (err) {
        res.status(400).json({msg:'Something went wrong!!'})   
    }
})

router.patch('/quotes/:id/edit', async (req, res)=>{
    try {
        const {id} = req.params;
        const {text, author, photo} = req.body;
        const quote = await Quote.findByIdAndUpdate(id, {text, author, photo});

        res.status(200).json({msg:'successfully updated quote'})
    } 
    catch (error) {
        res.status(400).json({msg:'Something went wrong!!'})   
    }
})

module.exports = router;