const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const userSchema = mongoose.Schema({
    id : {
        type : String
    },
    password : {
        type : String
    },
    email : {
        type : String
    },
    token : {
        type : String
    }
});

userSchema.methods.generateToken = function(callbackFn){
    const user = this;

    const token = jwt.sign(user._id.toHexString(), 'secretToken');

    user.token = token;
    
    user.save((err, doc) => {
        if(err) return callbackFn(err);
        callbackFn(null, doc);
    });

};

userSchema.methods.removeToken = function(callbackFn){
    const user = this;
    user.token = "";
    user.save((err, doc) => {
        if(err) return callbackFn(err);
        callbackFn(null,doc);
    });
};

const User = mongoose.model('Users',userSchema);
module.exports = {User};
