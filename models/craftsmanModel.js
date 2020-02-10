const { model, Schema } = require('mongoose');

const craftsmanSchema = new Schema({
    name: {
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
        type: Schema.Types.ObjectId,
        ref: 'Region',
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

model.exports = model('Craftsman', craftsmanSchema);