
const express = require('express');
const router = express.Router();
const Incident = require('../models/incident');

// GET all incidents
router.get('/', async (req, res) =>{
    try{
        const incidents = await Incident.find();
        res.json(incidents);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

// POST new incident
router.post('/', async (req, res) =>{
    const incident = new Incident({
        title: req.body.title,
        description: req.body.description,
        severity: req.body.severity
    });

    try{
        const newIncident = await incident.save();
        res.status(201).json(newIncident);
    }catch (err){
        res.status(400).json({message: err.message});
    }
});

// GET incident by ID
router.get('/:id', async (req, res) =>{
    try{
        const incident = await Incident.findById(req.params.id);
        if(incident){
            res.json(incident);
        }else{
            res.status(404).json({message: 'Incident not found!'});
        }
    }catch(err){
        if(err.kind === 'ObjectId'){
            return res.status(404).json({message: 'Invalid incident ID!'});
        }
        res.status(500).json({message: err.message});
    }
});

// DELETE incident by ID
router.delete('/:id', async (req, res) =>{
    try{
        const incident = await Incident.findByIdAndDelete(req.params.id);
        if(incident){
            res.status(200).send("Incident deleted successfully!!");
        }else{
            res.status(404).json({message: 'Incident not found!' });
        }
    }catch(err){
        if(err.kind === 'ObjectId'){
            return res.status(404).json({message:'Invalid incident ID!'});
        }
        res.status(500).json({ message: err.message});
    }
});

module.exports = router;



