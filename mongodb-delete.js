const {MongoClient, objectID} = require('mongodb')

const myUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(myUrl,(err,db) => {
    
    if (err) {
        return console.log(" Unable to connect the server")
    }

    console.log('connected to MongoDB sever');
    
    const my_db = db.db('todoApp');

    const my_collection = my_db.collection("Todos");

    // const myQuery = {completed:true}

    //delete many
    // my_collection.deleteMany(myQuery).then((result) =>{
    //     console.log(result)
    // });

    //delete One

    // const myQuery = {text:"some thing"};
    // my_collection.deleteOne(myQuery).then((result) =>{
    //     console.log(result)
    // });

    // findOneAndDelete, it get the deleted document back
    const myQuery = {text:"some thing"};
    my_collection.findOneAndDelete(myQuery).then((result) =>{
        console.log(result.value)
    });


    // db.close()

})