const mongoose = require('mongoose');

connect_mongoose = async(url) => {
    return await mongoose.connect(url);
}

module.exports = {
    connect_mongoose,
}