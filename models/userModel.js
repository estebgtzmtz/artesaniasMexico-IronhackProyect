const { model, Schema } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true,
        lowercase: true
    },
    image: {
        type: String,
        default: 'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png'
    },
    money: {
        type: Number,
        default: 0
    },
    role: {
        type: String,
        enum: ['ADMIN', 'GUEST'],
        default: 'GUEST'
    },
    cart: {
        type: [Schema.Types.ObjectId],
        ref: 'Product'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    googleID: {
        type: String,
        required: false
    }
}, {
    timestamps: true,
    versionKey: false
});

userSchema.plugin(PLM, { usernameField: 'email' });
module.exports = model('User', userSchema);