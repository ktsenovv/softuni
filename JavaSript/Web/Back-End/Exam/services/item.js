const Item = require('../models/Item');

async function createItem(item) {
    const result = new Item(item);
    await result.save();
}

async function getAllItems() {
    return Item.find({ closed: 0 }).lean();
}

async function getAllClosedItems(userId) {
    return Item.find({ owner: userId }).where('closed').equals(1).populate('owner').lean();
}

async function getItemById(id) {
    return Item.findById(id).lean();
}

async function getItemByUser(userId) {
    return Item.find({ owner: userId }).lean();
}

async function getItemAndUser(id) {
    return Item.findById(id).populate('owner').populate('bidder').lean();
}

async function editItem(id, item) {
    const existing = await Item.findById(id);

    existing.title = item.title;
    existing.description = item.description;
    existing.category = item.category;
    existing.image = item.image;
    existing.price = item.price;

    await existing.save();
}

async function deleteItem(id) {
    await Item.findByIdAndDelete(id);
}

async function placeBid(itemId, userId, price) {
    const item = await Item.findById(itemId);

    if (item.bidder == userId) {
        throw new Error('User is already placed a bid!');
    }

    if (price <= item.price) {
        throw new Error('Price bid must be bigger then the current!');
    }

    item.price = price;
    item.bidder = userId;
    await item.save();
}

async function closeAuction(itemId) {
    const item = await Item.findById(itemId);
    item.closed = 1;
    await item.save();
}

module.exports = {
    createItem,
    getAllItems,
    getAllClosedItems,
    getItemById,
    getItemByUser,
    getItemAndUser,
    editItem,
    deleteItem,
    placeBid,
    closeAuction
};