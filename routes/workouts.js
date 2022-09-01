const express=require('express')
const workouts=require('../models/workoutmodels')
const router=express.Router()
const {createWorkout,getAllworkouts,getWorkouts,deleteWorkout}=require('../controllers/controller')
//get all routes
router.get('/',getAllworkouts)

//Get  a single workout
router.get('/:id',getWorkouts)

//post a new workout
router.post('/',createWorkout)

//delete a single route
router.delete('/:id',deleteWorkout)

//update a single workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a single workout'})
})

module.exports=router