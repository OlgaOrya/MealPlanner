const mongoose = require ('mangoose');
const mealSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true
    }
})

module.exports = mongoose.model ('Meal', mealSchema);