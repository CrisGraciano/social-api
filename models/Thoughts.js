// require dependencies
const { Schema, model } = require('mongoose');

const ThoughtsSchema = new Schema({});

const Thoughts = model('Thoughts', ThoughtsSchema);

module.exports = Thoughts;