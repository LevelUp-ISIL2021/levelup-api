import mongoose from "mongoose";

require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.t8if7.mongodb.net/levelUp?retryWrites=true&w=majority`/*,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
    mongodb://localhost/levelUp
}*/)
    .then(db => console.log("Db in connected"))
    .catch(error => console.log(error))