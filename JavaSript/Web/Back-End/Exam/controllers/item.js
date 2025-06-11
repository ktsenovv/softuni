const { isUser, isOwner } = require('../middleware/guards');
const preload = require('../middleware/preload');
const { createItem, deleteItem, getAllItems, editItem, placeBid, getItemById, getAllClosedItems, closeAuction } = require('../services/item');
const { mapErrors } = require('../util/mappers');

const router = require('express').Router();

router.get('/catalog', async (req, res) => {
    const items = await getAllItems();

    res.render('catalog', { title: 'Catalog Page', items });
});

router.get('/catalog/:id', preload(populate = true), (req, res) => {
    const item = res.locals.item

    if (item.category == 'estate') {
        item.categoryName = 'Real Estate';
    } else if (res.locals.item.category == 'vehicles') {
        item.categoryName = 'Vehicles';
    } else if (res.locals.item.category == 'furniture') {
        item.categoryName = 'Furniture';
    } else if (res.locals.item.category == 'electronics') {
        item.categoryName = 'Electronics';
    } else if (res.locals.item.category == 'other') {
        item.categoryName = 'Other';
    }

    if (req.session.user) {
        item.isOwner = req.session.user._id == item.owner._id;
        if (item.bidder != undefined) {
            item.isBidder = req.session.user._id == item.bidder._id;
            item.isBidded = true;
        }
    }

    res.render('details', { title: 'Details Page' });
});

router.post('/catalog/:id/bid', preload(populate = true), isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        await placeBid(id, req.session.user._id, req.body.price);

        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);

        res.render('details', { title: 'Details Page', errors });
    }
});

router.get('/catalog/:id/close', preload(populate = true), isUser(), async (req, res) => {
    const id = req.params.id;

    try {
        await closeAuction(id);

        res.redirect('/auctions');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);

        res.render('auctions', { title: 'Closed Auctions Page', errors });
    }
});

router.get('/auctions', async (req, res) => {
    const userId = req.session.user._id;
    const items = await getAllClosedItems(userId);

    res.render('auctions', { title: 'Closed Auctions Page', items });
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Create Page', data: {} });
});

router.post('/create', isUser(), async (req, res) => {
    const userId = req.session.user._id;

    const { title, description, category, image, price } = req.body;
    const item = {
        title,
        description,
        category,
        image,
        price: Number(price),
        owner: userId
    };

    if (item.category == 'estate') {
        item.isEstate = true;
    } else if (item.category == 'vehicles') {
        item.isVehicles = true;
    } else if (item.category == 'furniture') {
        item.isFurniture = true;
    } else if (item.category == 'electronics') {
        item.isElectronics = true;
    } else if (item.category == 'other') {
       item.isOther = true;
    }

    try {
        await createItem(item);

        res.redirect('/catalog');
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);

        res.render('create', { title: 'Create Page', data: item, errors });
    }
});

router.get('/catalog/:id/edit', preload(), isOwner(), (req, res) => {
    if (res.locals.item.bidder != undefined) {
        res.locals.item.isDisabled = true;
    }

    if (res.locals.item.category == 'estate') {
        res.locals.item.isEstate = true;
    } else if (res.locals.item.category == 'vehicles') {
        res.locals.item.isVehicles = true;
    } else if (res.locals.item.category == 'furniture') {
        res.locals.item.isFurniture = true;
    } else if (res.locals.item.category == 'electronics') {
        res.locals.item.isElectronics = true;
    } else if (res.locals.item.category == 'other') {
        res.locals.item.isOther = true;
    }

    res.render('edit', { title: 'Edit Page' });
});

router.post('/catalog/:id/edit', preload(), isOwner(), async (req, res) => {
    const id = req.params.id;

    const { title, description, category, image, price } = req.body;

    let priceVal;
    if (res.locals.item.bidder != undefined) {
        priceVal = res.locals.item.price;
    } else {
        priceVal = price;
    }

    const item = {
        title,
        description,
        category,
        image,
        price: Number(priceVal)
    };

    try {
        await editItem(id, item);
        res.redirect('/catalog/' + id);
    } catch (err) {
        console.error(err);
        const errors = mapErrors(err);
        item._id = id;

        res.render('edit', { title: 'Edit Page', item, errors });
    }
});

router.get('/catalog/:id/delete', preload(), isOwner(), async (req, res) => {
    try {
        await deleteItem(req.params.id);
        console.log('deleted');

        res.redirect('/catalog');
    } catch (err) {
        console.log(err);
        const errors = mapErrors(err);

        res.render('details', { title: 'Delete Error', errors });
    }
});

module.exports = router;