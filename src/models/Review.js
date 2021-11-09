import {Schema, model} from 'mongoose'


const reviewSchema = new Schema({
    content: String,
    approved: Boolean,
    imgURL: String,
    user: {
        ref: "User",
        type: Schema.Types.ObjectId,
    },
},{
    timestamps: true,
    versionKey: false,
},
)

export default model('Review', reviewSchema);