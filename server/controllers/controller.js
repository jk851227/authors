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
            .then(data => {
                if(data.length > 0){
                    res.json(data)
                } else {
                    res.status(500).json({ error: "There are no data in the database" });
                }
            })
            .catch(err => res.json(err))
    },
        // One author
    oneAuthor: (req, res) => {
        Author.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => {
                if(err.kind == "ObjectId"){
                    res.json({ message: "An object with that ID does not exist" })
                } else {
                    res.json(err)
                }
            })
    },
    // Update author
    updateAuthor: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, { runValidators: true, new: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}