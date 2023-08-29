const DeliveryPartner = require('../models/DeliveryPathnerModel');

// Create a new delivery partner
const createDeliveryPartner = async (req, res) => {
    try {
        const newPartner = new DeliveryPartner(req.body);
        const savedPartner = await newPartner.save();
        res.status(201).json(savedPartner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get a list of all delivery partners
const getAllDeliveryPartners = async (req, res) => {
    try {
        const partners = await DeliveryPartner.find();
        res.status(200).json(partners);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get details of a specific delivery partner by ID
const getDeliveryPartnerById = async (req, res) => {
    try {
        const partner = await DeliveryPartner.findById(req.params.id);
        if (!partner) {
            return res.status(404).json({ message: 'Delivery partner not found' });
        }
        res.status(200).json(partner);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update details of a specific delivery partner by ID
const updateDeliveryPartnerById = async (req, res) => {
    try {
        const updatedPartner = await DeliveryPartner.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedPartner) {
            return res.status(404).json({ message: 'Delivery partner not found' });
        }
        res.status(200).json(updatedPartner);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete a specific delivery partner by ID
const deleteDeliveryPartnerById = async (req, res) => {
    try {
        const deletedPartner = await DeliveryPartner.findByIdAndDelete(req.params.id);
        if (!deletedPartner) {
            return res.status(404).json({ message: 'Delivery partner not found' });
        }
        res.status(204).send(); // No content in response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createDeliveryPartner,
    getAllDeliveryPartners,
    getDeliveryPartnerById,
    updateDeliveryPartnerById,
    deleteDeliveryPartnerById,
};
