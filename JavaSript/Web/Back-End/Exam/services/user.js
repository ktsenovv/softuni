const User = require('../models/User');
const { hash, compare } = require('bcrypt');

async function register(email, password, firstName, lastName) {
    const existing = await getUserByIdentifier(email);

    if (existing) {
        throw new Error('Email is taken!');
    }

    const hashedPassword = await hash(password, 10);

    const user = new User({
        email,
        hashedPassword,
        firstName,
        lastName
    });
    await user.save();

    return user;
}

async function login(email, password) {
    const user = await getUserByIdentifier(email);

    if (!user) {
        throw new Error('Incorrect email or password!');
    }

    const hasMatch = await compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect email or password!');
    }

    return user;
}

async function getUserByIdentifier(email) {
    const user = User.findOne({ email: new RegExp(`^${email}$`, 'i') });
    return user;
}

module.exports = {
    login,
    register
}