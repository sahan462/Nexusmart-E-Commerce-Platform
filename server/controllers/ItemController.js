const Item = require('../models/ItemModel');
const addItem = async (req, res) => {

    const {title, overview, description, category, imgURL, quantity, price, percentage, id} = req.body;

    try {
        let newItem = new Item({
            title: title,
            overview: overview,
            description: description,
            category: category,
            imgURL: imgURL,
            quantity: quantity,
            price: price,
            seller: id
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

    const {id, name} = req.query;

    try {
        let items;
        if (id) {
            items = await Item.findById(id).populate('seller', 'name -_id');
        }
        else if(name) {
            items = await Item.find({title: new RegExp(name, 'i')}).populate('seller', 'name -_id');
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
    //verify the seller of the item and req seller is same
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
    //verify the seller of the item and req seller is same
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