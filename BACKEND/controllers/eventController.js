const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');
const eventRegistrationSchema = require('../models/eventRegistrationModel');

const allowedEvents = [
  'code-puzzle',
  'project-exhibition',
  'robo-race',
  'cultural-events',
  'rangoli-competition',
  'food-without-fire',
  'nukkad-natak',
  'singing',
  'technical-poster',
  'dance-competition',
  'rock-band',
  'short-film-maker',
  'ad-mad-show',
  'tresure-hunt'
];

const registerEvent = asyncHandler(async (req, res) => {
  const { eventName, ...otherData } = req.body;

  if (!eventName || !allowedEvents.includes(eventName)) {
    res.status(400);
    throw new Error('Invalid or missing event name');
  }

  const collectionName = `${eventName.replace(/-/g, '_')}_registrations`;

  // Create model dynamically for the specific collection
  const EventModel = mongoose.model(collectionName, eventRegistrationSchema, collectionName);

  const registration = await EventModel.create({
    eventName,
    ...otherData,
    user: req.user._id,
  });

  res.status(201).json({ message: 'Registration successful' });
});

const getMyRegistrations = asyncHandler(async (req, res) => {
  const userId = req.user._id;
  let allRegistrations = [];

  // Query each event collection for registrations by the user
  for (const event of allowedEvents) {
    const collectionName = `${event.replace(/-/g, '_')}_registrations`;
    const EventModel = mongoose.model(collectionName, eventRegistrationSchema, collectionName);
    const registrations = await EventModel.find({ user: userId }).select('eventName teamName teamSize institution');
    allRegistrations = [...allRegistrations, ...registrations];
  }

  res.status(200).json(allRegistrations);
});

module.exports = { registerEvent, getMyRegistrations };