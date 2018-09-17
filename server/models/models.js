const mongoose = require('./mongoose');

const RateSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: [true, "*Rating is required"]
    },
    comment: {
        type: String,
        required: [true, "*Comment is required"]
    }
}, { timestamps: true });


const CakeSchema = new mongoose.Schema({
    baker: {
        type: String,
        required: [true, "*Name is required"]
    },
    imageUrl: {
        type: String,
        required: [true, "*Image URL is Required"]
    },
    ratings: [RateSchema]
}, { timestamps: true });


const Rate = mongoose.model('Rate', RateSchema);
const Cake = mongoose.model('Cake', CakeSchema);

module.exports = {
    Rate: Rate,
    Cake: Cake
}