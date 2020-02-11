const { model, Schema } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true,
        default: 'https://i.ya-webdesign.com/images/image-not-available-png-3.png'
    },
    available: {
        type: Boolean,
        default: true
    },
    category: {
        type: String,
        enum: ['Textiles', 'Ceramica', 'Joyeria', 'Pinturas']
    },
    craftsman: {
        type: this.schema.Types.ObjectId,
        ref: 'Craftsman'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);