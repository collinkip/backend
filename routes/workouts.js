const express=require('express')
const workouts=require('../models/workout')
const router=express.Router()
//get all routes
router.get('/',(req,res)=>{
    res.json({mssg:'GET all workouts'})
})

//Get  a single workout
router.get('/:id',(req,res)=>{
    res.json({mssg:'Get a single workout'})
})

//post a new workout
router.post('/',async(req,res)=>{
    const {title,load,reps}=req.body
    try {
        const Workout=await workouts.create({title,load,reps})
        res.status(200).json(Workout)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

//delete a single route
router.delete('/:id',(req,res)=>{
    res.json({mssg:'Delete a single workout'})
})

//update a single workout
router.patch('/:id',(req,res)=>{
    res.json({mssg:'Update a single workout'})
})

module.exports=router