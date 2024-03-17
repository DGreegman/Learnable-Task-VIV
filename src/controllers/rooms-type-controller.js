const express = require('express');
const RoomType = require('../models/rooms-types-model');

// const Room = require('../models/room');


// Get all room types
const getAllRoomTypes = async (req, res) => {
    try {
        const roomTypes = await RoomType.find();
        if (!roomTypes) {
          return res.status(404).json({ message: 'No room types found' });
        }
        res.status(200).json(roomTypes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// create room types
const createRoomType = async (req, res) => {
    const { name } = req.body;

    try {

        if (!name) { 
            res.status(400)
            throw new Error('Name is required');
        }

        // checking if a roomType is already existing the database

        const existingRoomType = await RoomType.findOne({ name });
        if (existingRoomType) {
            res.status(400)
            throw new Error('Room type already exists');
        }

        const newRoomType = new RoomType({ name });
        
        await newRoomType.save();
        res.status(201).json(newRoomType);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllRoomTypes,
    createRoomType
};