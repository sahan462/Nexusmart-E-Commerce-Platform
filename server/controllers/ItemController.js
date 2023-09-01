const Item = require('../models/ItemModel');
const addItem = async (req, res) => {

    const {
        title,
        overview,
        description,
        categories,
        imgURL,
        images,
        quantity,
        price,
        discountPercentage,
        availableColors,
        warranty,
        returnItem,
        delivery,
        sellerId
    } = req.body;

    try {
        const newItem = new Item({
            title: title,
            overview: overview,
            description: description,
            categories: categories,
            imgURL: imgURL,
            images: images,
            quantity: quantity,
            price: price,
            availableColors: availableColors,
            warranty: warranty,
            returnItem: returnItem,
            delivery: delivery,
            seller: sellerId,
        });

        if (discountPercentage > 0) {
            newItem.discount = {
                percentage: discountPercentage,
                newPrice: price - (price * (discountPercentage / 100)),
            };
        }

        await newItem.save();
        res.status(200).send(newItem);
    } catch (error) {
        res.status(400).send({
            error: error.message,
        });
    }
};

const viewItems = async (req, res) => {
    const { id, name, category } = req.query;

    try {
        let items;

        if (id) {
            items = await Item.findById(id).populate('seller', 'name -_id');
        } else if (name) {
            items = await Item.find({ title: new RegExp(name, 'i') }).populate('seller', 'name -_id');
        } else if (category) {
            items = await Item.find({ category: category }).populate('seller', 'name -_id');
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

    const {itemId} = req.params;

    const {
        title,
        overview,
        description,
        categories,
        imgURL,
        images,
        quantity,
        price,
        availableColors,
        warranty,
        returnItem,
        delivery,
    } = req.body;

    //verify the seller of the item and req seller is same
    try {

        const item = await Item.findByIdAndUpdate(itemId, {
            $set: {
                title: title,
                overview: overview,
                description: description,
                categories: categories,
                imgURL: imgURL,
                images: images,
                quantity: quantity,
                price: price,
                availableColors: availableColors,
                warranty: warranty,
                returnItem: returnItem,
                delivery: delivery
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

    //const {itemId} = req.body;
    const itemId = req.params.itemId;
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