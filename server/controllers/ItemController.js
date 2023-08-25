const Item = require('../models/ItemModel');
const addItem = async (req, res) => {

    const {title, description, imgURL, quantity, price, percentage, sellerId} = req.body;

    try {
        let newItem = new Item({
            title: title,
            description: description,
            imgURL: imgURL,
            quantity: quantity,
            price: price,
            seller: sellerId
        })

        if (percentage > 0) {
            newItem.discount = {
                percentage: percentage,
                newPrice: price - (price * (percentage / 100))
            };
        }
        newItem = await Item.create(newItem);
        res.status(200).send(newItem);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

const viewItems = async (req, res) => {

    const {title} = req.query;

    try {
        let items;
        if(title) {
            items = await Item.find({title: new RegExp(title, 'i')}).populate('seller', 'name -_id');
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
