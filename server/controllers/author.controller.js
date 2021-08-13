const Author = require('../models/author.model');

module.exports.create = (req,res) => {
    console.log("inside create");
    console.log(req.body); //holds the json object that we use for create
    Author.create(req.body)
    .then((newAuthor)=> {
        console.log(newAuthor);
        res.json(newAuthor);
    })
    .catch((err)=> {
        console.log(err);
        //change the response object status to 400 so the client can see the error then send
        //the err in json back to the client
        res.status(400).json(err);
        
    })
}
module.exports.getAll = (req,res) => {
    Author.find()
    .then((allAuthors) => {
        console.log("inside get all");
        console.log(allAuthors);
        res.json(allAuthors);
    })
    .catch((err) => {
        console.log(err);
        res.json({errMsg: err});
    })
};
module.exports.getOne = (req,res) => {
    console.log("inside getOne");
    console.log("looking for id "+ req.params.id);
    Author.findById(req.params.id)
    .then((oneAuthor)=> {
        console.log(oneAuthor);
        res.json(oneAuthor);

    })
    .catch((err)=> {
        console.log(err);
        //change the response object status to 400 so the client can see the error then send
        //the err in json back to the client
        res.status(400).json(err);
    })
}

module.exports.update = (req,res) => {
    console.log("Inside update");
    console.log("looking for id "+ req.params.id);
    console.log(req.body); 
    Author.findByIdAndUpdate(req.params.id, req.body,{
        
            new: true,//return the updated object
            runValidators: true,//use the same validation that was used for create
          
    })
    .then(updatedAuthor => {
        console.log(updatedAuthor);
        res.json(updatedAuthor);
    })
    .catch((err)=> {
        console.log(err);
        //change the response object status to 400 so the client can see the error then send
        //the err in json back to the client
        res.status(400).json(err);
    })


}

    //delete a single author
    module.exports.delete = (req,res) => {
        console.log("inside the delete");
        console.log("looking for id "+ req.params.id);
     
    
        Author.deleteOne({ _id: req.params.id })
        .then((result) => res.json({ result: result }))
        .catch((err) => res.json({ errMsg: err }));
        
    }

    