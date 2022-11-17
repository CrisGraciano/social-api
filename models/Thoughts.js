// require dependencies
const { Schema, model } = require('mongoose');

const ReactionsSchema = new Schema(
    {
        reactionId: {
            default: ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            default: Date.now,
            // use getter method
        }
    }
);

const ThoughtsSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now
            // use getter method
        },
        username: {
            type: String,
            required: true
        },
        reactions: [ReactionsSchema]
    }
);

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;