const express = require('express');
const shortId = require('shortid');
const PORT = 8000;
const URL = require('./models/url');

const app = express();
app.use( express.json() );

const url_route = require('./routes/url');
const { connect_mongoose } = require('./connect');


connect_mongoose('mongodb://localhost:27017/short-url').then( () => (console.log("Connected to mongodb 😁")));

app.get('/:shortId', async (req, resp) => {
    console.log(`getting the id good sir`)
    const short = req.params.shortId;

    const entry = await URL.findOneAndUpdate({
        shortid: short
    }, { $push: {
        visited_history: { timestamps: Date.now() },
    }}, { now : true});

    console.log('done 👍')
    console.log(entry.redirect_url.trim());

    resp.redirect(entry.redirect_url.trim());
})


app.use('/url', url_route);

app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)});