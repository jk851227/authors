const Author = require('../models/author.model');

module.exports = {
    // Create Author
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // Read
    // All authors
    allAuthors: (req, res) => {
        Author.find({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // One author
    oneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}