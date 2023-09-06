const mongoose = require('mongoose');

const deliveryPartnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
    },
    ratePerKM: {
        type: Number,
        required: true
    },
    contactPerson: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    servicesOffered: [String],
    active: {
        type: Boolean,
        default: true,
    },
    registrationDate: {
        type: Date,
        default: Date.now,
    },
    adminID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin'
    }
});

const DeliveryPartner = mongoose.model('DeliveryPartner', deliveryPartnerSchema);

module.exports = DeliveryPartner;
