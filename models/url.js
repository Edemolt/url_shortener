const mongoose = require(`mongoose`);
const shortid = require("shortid");

const url_schema = new mongoose.Schema({
    shortid:{
        type : String,
        required : true,
        unique : true,
    },

    redirect_url : {
        type : String,
        required : true,
    },

    visited_history : [ {time : { type : Number }}],
}, { timestamps : true});

const URL = mongoose.model("url", url_schema);

module.exports = URL;