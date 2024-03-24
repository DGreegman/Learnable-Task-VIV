const express = require('express');
const RoomType = require('../models/rooms-types-model');


class RoomTypeController {
    constructor() {}
    // Get all room types
   async getAllRoomTypes (req, res) {
        try {
            const roomTypes = await RoomType.find();
            if (!roomTypes || roomTypes.length === 0) {
                return res.status(404).json({
                    
                    message: 'No room types found'
                });
            }
            res.status(200).json({
                length: roomTypes.length,
                message: roomTypes
            });
        } catch (error) {
            console.log(error.name)
            res.status(500).json({
                status: 'fail',
                message: error.message,
                name: error.name
            });
        }
    };
    
    // create room types
     async createRoomType (req, res) {
        const { name } = req.body;
    
        try {
    
            if (!name) { 
                res.status(400)
                throw new Error('Name is required');
            }
    
            // checking if a roomType is already existing the database
    
            const existingRoomType = await RoomType.findOne({ name });
            if (existingRoomType) {
                return res.status(400).json({message: "Room Type Already Exists"})
                
            }
    
            const newRoomType = new RoomType({ name });
            
            await newRoomType.save();
            res.status(201).json(newRoomType);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
}

module.exports = RoomTypeController