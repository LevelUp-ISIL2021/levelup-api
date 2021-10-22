import {Schema, model} from 'mongoose'

const reviewSchema = new Schema({
    content: String,
    approved: Boolean,
    imgURL: String,
},{
    timestamps: true,
    versionKey: false,
},
)

export default model('Review', reviewSchema);