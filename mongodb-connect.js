// import { stringify } from 'querystring';

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/todoApp', (err,client) => {

    if(err){
        return console.log('Unable to connect')
    }

    const db = client.db('todoApp');

    db.collection("Todos").insertOne({
        text:'some thing',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log("unable to insert: ",err)
        }
        // console.log(stringify(result.ops,undefined,2))
        console.log(result.ops)
    })

    client.close();

})
