const express=require('express')

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

router.post('/',(req,res)=>{
    req.body
    res.json({mssg:'Post a single workout'})
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