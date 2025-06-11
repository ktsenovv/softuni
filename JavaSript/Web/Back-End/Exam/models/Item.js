const { Schema, model, Types: { ObjectId } } = require('mongoose');

const itemSchema = new Schema({
    title: { type: String, required: true, minlength: [4, 'Title must be at least 4 characters long!'] },
    description: { type: String, maxlength: [200, 'Title must be a maximum of 200 characters long!'] },
    category: {
        type: String, required: true, enum: {
            values: ['vehicles', 'estate', 'electronics', 'furniture', 'other'],
            message: 'The category must be one of the following: Vehicles, Real Estate, Electronics, Furniture, Other!'
        }
    },
    image: { type: String },
    price: { type: Number, required: true, min: 0 },
    owner: { type: ObjectId, ref: 'User', required: true },
    bidder: { type: ObjectId, ref: 'User' },
    closed: { type: Number, default: 0 }
});

const Item = model('Item', itemSchema);

module.exports = Item;