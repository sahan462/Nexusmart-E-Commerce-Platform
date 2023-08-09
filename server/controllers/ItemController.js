const Item = require('../models/ItemModel');

const addItem = async (req, res) => {

    const {name, description, quantity, price, sellerId} = req.body;

    try {
        let item = new Item({
            name: name,
            description: description,
            quantity: quantity,
            price: price,
            seller: sellerId
    })
        item = await Item.create(item);
        res.status(200).send(item);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

const viewItems = async (req, res) => {

    const {name} = req.query;

    try {
        let items;
        if(req.query.name) {
            items = await Item.find({name: new RegExp(name, 'i')}).populate('seller', 'name -_id');
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

const changeItemProp = async (req, res) => {

    const {itemId, quantity, price} = req.body;

    try {
        const item = await Item.findByIdAndUpdate(itemId, {
            $set: {
                quantity: quantity,
                price: price
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

const deleteItem = async (req, res) => {

    const {itemId} = req.body;

    try {
        const item = await Item.findByIdAndRemove(itemId);
        if (!item) return res.status(404).send({error: 'The Item with the given ID was not found.'});
        res.status(200).send(item)

    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

module.exports = {
    addItem,
    viewItems,
    changeItemProp,
    deleteItem
}
