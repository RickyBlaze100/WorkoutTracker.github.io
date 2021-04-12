const mongoose = require("mongoose");

const Schema = mongoose.Schema;

workout.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, exercise) => {
    return total + exercise.duration;
  }, 0);
});

const workout = new Schema(
  {
    exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Exercise name"
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
      }
    ]
  },
);

const Workout = mongoose.model("Workout", workout);

module.exports = Workout;
