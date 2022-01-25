const express = require('express');
const app = express();
const bodyParser= require('body-parser');
const scrapeIds = require('./scrape');
const retrieveBooks = require('./retrieve');

app.use((req, res, next) => {
    res.header({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*'
    });
    next();
})

app.get('/api', async (req, res, next) => {
    const errors = {};
    
    if (!req.query.req) {
        errors.noQuery = true;
    }

    if (errors.noQuery) return res.json(errors);
    
    const scrapeOptions = {
        searchReq: req.query.req || '',
        sort: req.query.sort || '',
        sortmode: req.query.sortmode || 'DESC',
    }

    const apiOptions = {
        fields: req.query.fields !== undefined ? req.query.fields : 'Title,Author,MD5',
        lg_topic: req.query.lg_topic !== undefined ? req.query.lg_topic : ''
    }

    const ids = await scrapeIds(scrapeOptions);

    if (ids.length < 1) { 
        errors.notFound = true;
        return res.json(errors);
    }

    const json = await retrieveBooks(ids, apiOptions);
    res.json(json);
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));