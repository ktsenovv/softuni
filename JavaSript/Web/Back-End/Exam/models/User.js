const { Schema, model } = require('mongoose');

const EMAIL_PATTERN = /^([a-zA-Z-]+)@([a-zA-Z-]+)\.([a-zA-Z-]+)$/;

const userSchema = new Schema({
    email: {
        type: String, required: [true, 'Email is required!'], validate: {
            validator(value) {
                return EMAIL_PATTERN.test(value);
            },
            message: 'Please, enter valid email!'
        }
    },
    hashedPassword: { type: String, required: true },
    firstName: { type: String, required: true, minlength: [1, 'First name must be at least 1 characters long!'] },
    lastName: { type: String, required: true, minlength: [1, 'Last name must be at least 1 characters long!'] },
});

userSchema.index({ email: 1 }, {
    unique: true,
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;