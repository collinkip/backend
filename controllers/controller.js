const { default: mongoose } = require('mongoose')
const workouts=require('../models/workoutmodels')


//get all workouts

const getAllworkouts=async(req,res)=>{
    const workout=await workouts.find({})
    res.status(200).json(workout)
}

//get a single workout

const getWorkouts=async(req,res)=>{
    const { id }=req.params
    

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'the id is invalid'})
    }
    const Workout=await workouts.findById(id)

    if (!Workout) {
        return res.status(404).json({error:'No such workouts'})
    }
    res.status(200).json(Workout)

}

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
const deleteWorkout=async(req,res)=>{
    const { id }=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'the id is invalid'})
    }

    const workout=await workouts.findByIdAndDelete({_id:id})
    if (!workout) {
        return res.status(404).json({error:'No such workouts'})
    }
    res.status(200).json(workout)
}

//update a workout

const updateWorkout=async(req,res)=>{
    const { id }=req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'the id is invalid'})
    }
    const workout=await workouts.findByIdAndUpdate({_id:id},{
        ...req.body
    })
    if (!workout) {
        return res.status(404).json({error:'No such workouts'})
    }
    res.status(200).json(workout)

}




module.exports={
    createWorkout,
    getAllworkouts,
    getWorkouts,
    deleteWorkout,
    updateWorkout
}