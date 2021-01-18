const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
    id:{
        type : String,
    },
    completed : {
        type : Boolean
    },
    desc : {
        type : String
    },
    created_date : {
        type : Date
    },
    due_date : {
        type : Date
    }
});

const Todos = mongoose.model('todos', todoSchema);
module.exports = {Todos};