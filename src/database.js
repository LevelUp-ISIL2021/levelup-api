import mongoose from "mongoose";

mongoose.connect("mongodb://localhost/levelUp"/*,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}*/)
    .then(db => console.log("Db in connected"))
    .catch(error => console.log(error))