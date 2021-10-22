import User from '../models/User'

export const createUser = async (req, res) =>{
    /*res.json('creating user')*/
    const {username, firstname, lastnamefather, lastnamemother,dni, email, password, phonenumber, picture, roles} = req.body

    const newUser = new User({username, firstname, lastnamefather, lastnamemother,dni, email, password, phonenumber, picture, roles});

    const userSaved = await newUser.save()

    res.status(201).json(userSaved)
}

export const getUsers = async (req, res) =>{
    const users = await User.find();
    res.json(users)
}