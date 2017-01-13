const mongoose = require('mongoose');

export const contentSchema = new mongoose.Schema({
  projectName: String,
  project: mongoose.Schema.Types.Mixed,
  projectVersion: Number
});
