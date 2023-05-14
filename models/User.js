const mangoose = require('mongoose');
const Schema = mangoose.Schema;

const userSchema = new Schema({
    email : {type: String , require:true},
    password : {type: String, require: true}
})

module.exports = mangoose.model('Users', userSchema)