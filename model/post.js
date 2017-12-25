const mongoose = require('mongoose');

var postSchema = mongoose.Schema({
    title: String,
    categories: [String],
    content: String,
    authorName: String,
    authorUsername: String,
    authorId: String
});

//postSchema.plugin(timestamps);

//var Post = mongoose.model('Post', postSchema);
module.exports = mongoose.model('Post', postSchema);