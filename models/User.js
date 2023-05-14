const mangoose = require('mangoose');
const schema = mangoose.Schema;

const userSchema = new Schema({
    email : {type: String , require:true},
    password : {type: String, require: true}
})

module.exports = mangoose.model('User', userSchema)