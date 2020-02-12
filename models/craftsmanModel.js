const { model, Schema } = require('mongoose');

const craftsmanSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
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
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Craftsman', craftsmanSchema);