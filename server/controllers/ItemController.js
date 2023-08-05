const Item = require('../models/ItemModel');

exports.addItem = async (req, res) => {
    try {
        let item = new Item({
            name: req.body.name,
            description:req.body.description,
            quantity: req.body.quantity,
            price: req.body.price,
            seller:req.body.sellerId
    })
        item = await Item.create(item);
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.viewItems = async (req, res) => {
    try {
        let items;
        if(req.query.name) {
            items = await Item.find({name: new RegExp(req.query.name, 'i')}).populate('seller', 'name -_id');
        } else {
            items = await Item.find().populate('seller', 'name -_id');
        }
        
        res.status(200).send(items);

    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.changeItemProp = async (req, res) => {
    try {
        const item = await Item.findByIdAndUpdate(req.body.itemId, {
            $set: {
                quantity: req.body.quantity,
                price: req.body.price
            }
        }, { new: true });
        if (!item) return res.status(404).send({error: 'The Item with the given ID was not found.'});
        res.status(200).send(item)

    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndRemove(req.body.itemId);
        if (!item) return res.status(404).send({error: 'The Item with the given ID was not found.'});
        res.status(200).send(item)

    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};
