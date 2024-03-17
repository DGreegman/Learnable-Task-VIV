const Rooms = require('../models/rooms-model');
const express = require('express')
const mongoose = require('mongoose')

const router = express.Router();

const createRooms = async (req, res) => {
    const { name, price, roomType } = req.body

    try {

        // checking if the body name exists
        if (!name || !price || !roomType) {
            return res.status(400).json({
                message: "Please provide all required fields"
            })
        }
        const rooms = new Rooms({ name, price, roomType })
        const savedRoom = await rooms.save();

        res.status(201).json(savedRoom);
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// getting all the rooms
const getRooms = async (req, res) => {
    try {
        const rooms = await Rooms.find()
        if (!rooms) {
          return  res.status(404).json({ message: "No rooms found" })
        }   
        
        res.status(200).json({ message: rooms })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const getARoom = async (req, res) => {
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

const updateRoom = async (req, res) => {
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

const deleteRoom = async (req, res) => {
    const { id } = req.params
    const rooms = await Rooms.findByIdAndDelete(id)
    if (!rooms) {
        return res.status(404).json({ message: "No room found" })
    }
    res.status(200).json({ message: "Room deleted successfully" })
}
module.exports = { createRooms, getRooms, getARoom, updateRoom, deleteRoom }