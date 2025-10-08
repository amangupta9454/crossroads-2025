// Backend: models/eventRegistrationModel.js
// This exports the schema only, as models are created dynamically per event.

const mongoose = require('mongoose');

const teamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true, match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'] },
  grade: { type: Number, required: true },
  branch: { type: String },
});

const eventRegistrationSchema = new mongoose.Schema({
  eventName: { type: String, required: true },
  teamName: { type: String, required: true },
  teamLeaderName: { type: String, required: true },
  teamLeaderEmail: { type: String, required: true },
  teamLeaderMobile: { type: String, required: true, match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'] },
  institutionType: { type: String, required: true, enum: ['school', 'college'] },
  grade: { type: Number, required: true },
  branch: { type: String },
  institution: { type: String, required: true },
  teamLeaderGender: { type: String, required: true, enum: ['male', 'female', 'other'] },
  teamSize: { type: Number, required: true, min: 1 },
  teamMembers: [teamMemberSchema],
  teamLeaderStudentId: { type: String, required: true },
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true,
});

module.exports = eventRegistrationSchema;