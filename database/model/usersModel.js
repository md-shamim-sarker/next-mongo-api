import {model, models, Schema} from "mongoose";

const userSchema = new Schema(
    {
        name: String,
        email: String,
        password: String
    }
);

const Users = models.user || model('user', userSchema);

export default Users;

/*
[
    {"name": "Snigdha1", "email": "snigdha1@gmail.com", "password": "123456"},
    {"name": "Snigdha2", "email": "snigdha2@gmail.com", "password": "123456"},
    {"name": "Snigdha3", "email": "snigdha3@gmail.com", "password": "123456"},
    {"name": "Snigdha4", "email": "snigdha4@gmail.com", "password": "123456"},
    {"name": "Snigdha5", "email": "snigdha5@gmail.com", "password": "123456"}
]
*/