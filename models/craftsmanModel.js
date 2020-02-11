const { model, Schema } = require('mongoose');

const craftsmanSchema = new Schema({
    name: {
        type: String,
        required: false
    },
    img: {
        type: String,
        required: true,
        default: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'
    },
    product: {
        type: [Schema.Types.ObjectId],
        ref: 'Product',
        required: false
    },
    region: {
        type: String,
        enum: ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan']
    },
    active: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Craftsman', craftsmanSchema);