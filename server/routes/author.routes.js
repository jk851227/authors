const controller = require('../controllers/controller');

module.exports = app => {
    // Create Route
    app.post("/api/authors/new", controller.createAuthor);
    // Read Route
    app.get("/api/authors", controller.allAuthors);
}