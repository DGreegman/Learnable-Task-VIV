const Rooms = require('../models/rooms-model');
const express = require('express')
const mongoose = require('mongoose')

class RoomsController{
    constructor(){}
    async createRooms (req, res) {
        const { name, price, roomType } = req.body
    
        try {
    
            // Enforcing user to fill all the required fields 
            if (!name || !price || !roomType) {
                return res.status(400).json({
                    message: "Please provide all required fields"
                })
            }

            // checking for name of room less than 3 characters
            if(name.length < 5){
                return res.status(400).json({
                    message: "Name of room must be at least 5 characters"
                })
            }

            // Checking if Room Already Exists using the field name
            const existingRoom = await Rooms.findOne({ name })
            if (existingRoom){
                return res.status(400).json({
                    message: "Room already exists"
                })
            }



            // saving the room in the database
            const rooms = new Rooms({ name, price, roomType })
            const savedRoom = await rooms.save();
    
            res.status(201).json(savedRoom);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    
    // getting all the rooms
   async getRooms (req, res) {
       try {
           /* let query = {};

           // Add filters if provided
           if (req.query.roomType) {
               query.type = req.query.roomType;
           }
           if (req.query.minPrice || req.query.maxPrice) {
               query.price = {};
               if (req.query.minPrice) {
                   query.price.$gte = parseFloat(req.query.minPrice);
               } else {
                   query.price.$gte = 0;
               }
               if (req.query.maxPrice) {
                   query.price.$lte = parseFloat(req.query.maxPrice);
               }
           } */
            const rooms = await Rooms.find()
            if (!rooms) {
              return  res.status(404).json({ message: "No rooms found" })
            }   
            
            res.status(200).json({ message: rooms })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    
    // Getting a Single Room
   async getARoom (req, res) {
        const { id } = req.params
        try {
            const room = await Rooms.findById(id)
            if (!room) {
              return res.status(404).json({ message: "No room found" })
            }
            res.status(200).json({ message: room })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    
   async updateRoom  (req, res) {
        const { id } = req.params
        const { name, price, roomType } = req.body
        try {
            const room = await Rooms.findByIdAndUpdate(id, { name, price, roomType }, { new: true })
            if (!room) {
               return res.status(404).json({ message: "No room found" })
            }
            res.status(200).json({ message: room })
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    }
    
   async deleteRoom (req, res) {
        const { id } = req.params
        const rooms = await Rooms.findByIdAndDelete(id)
        if (!rooms) {
            return res.status(404).json({ message: "No room found" })
        }
        res.status(200).json({ message: "Room deleted successfully" })
    }
}
module.exports = RoomsController 