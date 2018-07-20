var mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/user-list', {
    useMongoClient: true
});

var Schema = mongoose.Schema;

var userSchema = new Schema({
    adSoyad: String,
    cinsiyet: String,
    sirket: String,
    yas: Number,
    memleket: String,
    okul: String
});

mongoose.model("User", userSchema);

module.exports = mongoose;