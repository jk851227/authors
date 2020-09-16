const controller = require('../controllers/controller');

module.exports = app => {
    // Create Route
    app.post("/api/authors/new", controller.createAuthor);
    // Read Route
    app.get("/api/authors", controller.allAuthors);
    app.get("/api/authors/:id", controller.oneAuthor);
    // Update Route
    app.patch("/api/authors/:id", controller.updateAuthor);
    // Delete Route
    app.delete("/api/authors/:id", controller.deleteAuthor);
}