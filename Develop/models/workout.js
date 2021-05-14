const mongoose = require("mongoose");

const Schema = mongoose.Schema

const WorkOutoutSchema = new Schema({

day: {
    type: Date,
    default:Date.now,
},

exercises: [{
    type: { 
    type: String,
    required: true,
},
name: {
    type: String,
    required: true,
},
duration: {
    type: Number,
    required: true,
},
weught: {
    type: Number
},
reps: {
    type: Number
},
sets: {
    type: Number
},
distance: {
    type: Number
}

}]

});


const Transaction = mongoose.model("Workout", WorkoutSchema);

module.exports = Transaction;