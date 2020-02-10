const { model, Schema } = require('mongoose');

const categoryModel = require({
    name: {
        type: String,
        enum: ['Textiles', 'Ceramica', 'Joyeria', 'Pinturas']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Categoria', categoryModel);