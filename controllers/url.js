const shortid = require('shortid');
const URL = require('../models/url');

generate_new_short_url = async(req, resp) => {
    const short = shortid.generate(); // Ensure you call the generate method

    const body = req.body;
    if (!body || !body.url) { // Check both for body and body.url existence
        return resp.status(400).json({ error: 'URL is required' }); // Improved error message
    }

    await URL.create({
        shortid : short,
        redirect_url : body.url.trim(),
        visited_history : [],
    })
    return resp.json({ id : short})
}

get_analytics = async(req, resp) => {
    const shortId = req.params.shortId;
    const result = await URL.findOne( {shortId});
    return resp.json({ total_clicks : result.visited_history.length,
                            analytics : result.visited_history,})
}

module.exports = {
    generate_new_short_url,
    get_analytics,
}