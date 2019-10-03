const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
	email: String,
});

module.exports = mongoose.model('Session', SessionSchema);