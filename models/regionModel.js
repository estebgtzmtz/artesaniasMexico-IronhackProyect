const { model, Schema } = require('mongoose');

const regionModel = require({
    name: {
        type: String,
        enum: ['Oaxaca', 'Chiapas', 'Tabasco', 'Michoacan', 'Guerrero', 'Yucatan']
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Region', regionModel);