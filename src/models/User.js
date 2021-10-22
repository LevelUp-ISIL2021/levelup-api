import {Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
    },
    firstname: {
        type: String
    },
    lastnamefather: {
        type: String
    },
    lastnamemother: {
        type: String
    },
    dni: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String
    },
    picture: {
        type: String
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
    },
],
}, {
    timestamps: true,
    versionKey: false,
},
);

userSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return await bcrypt.hash(password, salt)
}

userSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword)
}


export default model('User', userSchema);