const router = require("express").Router();
const { Workout } = require("../../models");


router.post("/workouts", async (req, res) => {
  try {
    const workoutData = await Workout.create({});
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/workouts/:id", async (req, res) => {
  try {
    const workoutData = await Workout.findByIdAndUpdate(
      req.params.id,
      { $push: { exercises: req.body } },
      { new: true }
    );
    res.status(200).json(workoutData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/workouts", async (req, res) => {
  try{
    const workoutData = await Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: "$exercises.duration",
        },
      },
    },
  ])
console.log()
  res.status(200).json(workoutData)
} catch(err) {
    res.status(500).json(err)
}
});

router.get("/workouts/range", async (req,res) => {
    try{
        const workoutData = await Workout.aggregate([
        {
          $addFields: {
            totalDuration: {
              $sum: "$exercises.duration",
            },
          },
        },
        //decending order is how being sorted. 7 days through ids.
      ]).sort({_id: -1}).limit(7)

      res.status(200).json(workoutData)
    } catch(err) {
        res.status(500).json(err)
    }
    });



router.delete("/workouts", async (req,res) => {
    try {
    const workoutData = await Workout.findByIdAndDelete(req.body);
    res.status(200).json(true)
} catch(err) {
    res.status(500).json(err)
}
});

module.exports = router;