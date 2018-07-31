
const {MongoClient, objectID} = require('mongodb');

const myUrl = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(myUrl,(err,db) => {
    
    if(err){
        return console.log(" Unable to connect the server")
    }

    console.log('connected');
    
    const my_db = db.db('todoApp');
    const my_collection = my_db.collection("Todos");

    const myQuery = {completed:true}

    // toArray

    // my_collection.find(myQuery).toArray().then((doc) =>{
    //      console.log(doc)
    // }).catch((err) => {
    //     console.log("error on getting collection")
    // })

    // count

    my_collection.find().count().then((count) =>{
         console.log(`Todos count ${count}`)
    }).catch((err) => {
        console.log("error on getting collection")
    })

    db.close()

})