// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server', err);
    }
    console.log('Connected to MongoDB server');

    // Uncomment below statement one by one to delete using different methods

    // deleteMany
    // db.collection('Todos').deleteMany({ text: 'Buy groceries' }).then((result) => {
    //     console.log(result);
    // });

    // deleteone
    // db.collection('Todos').deleteOne({text: 'Buy groceries'}).then((result)=>{
    //     console.log(result);
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false }).then((doc) => {
    //     console.log(doc);
    // });


    // deleteMany - Users
    // db.collection('Users').deleteMany({ name: 'Arun Kumar' }).then((result) => {
    //     console.log(result);
    // });

    // deleteOne - Users

    // db.collection('Users').findOneAndDelete({
    //     _id: 123
    // }).then((result) => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // });

    // db.close();
});