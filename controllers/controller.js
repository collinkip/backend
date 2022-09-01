const workouts=require('../models/workoutmodels')


//get all workouts

const getAllworkouts=async(req,res)=>{
    const workout=await workouts.find({})
    res.status(200).json(workout)
}

//get a single workout

//create new workout

const createWorkout=async(req,res)=>{
    const {title,load,reps}=req.body
    try {
        const Workout=await workouts.create({title,load,reps})
        res.status(200).json(Workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

//delete a workout


//update a workout

module.exports={
    createWorkout,getAllworkouts
}