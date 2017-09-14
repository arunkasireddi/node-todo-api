const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

//Todo.findOneAndRemove()

//Todo.findByIdAndRemove()

// Todo.findOneAndRemove({ _id: '59baa314871bb4aea778eef4' }).then((doc) => {

// })

Todo.findByIdAndRemove('59baa314871bb4aea778eef4').then((todo) => {
    console.log(todo);
});