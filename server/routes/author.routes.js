const AuthorController = require("../controllers/author.controller");

module.exports=(app) => {
    //postman setup check
    app.get("", (req, res)=>{
        res.send("postman is ok. ")
    });
    app.get("/api/authors", AuthorController.getAll);
    
   
    //create a single restaurant
    app.post("/api/authors", AuthorController.create);
    //get a single restaurant
    app.get("/api/authors/:id", AuthorController.getOne);
    //update a single author
    app.put("/api/authors/:id", AuthorController.update);
    //delete a single author
    app.delete("/api/authors/:id", AuthorController.delete);
}