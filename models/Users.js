const { Schema, model } = require('mongoose');

const UsersSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match:  //maybe use regex here??
        },
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts'
        }],
        friends:[{
            type: Schema.Types.ObjectId,
            ref: 'Users',
        }]
    }
);

const Users = model('Users', UsersSchema);

module.exports = Users;