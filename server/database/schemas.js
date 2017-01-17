const mongoose = require('mongoose');

export const contentSchema = new mongoose.Schema({
  projectName: String,
  project: mongoose.Schema.Types.Mixed,
  projectVersion: Number
});

export const userSchema = new mongoose.Schema({
  username: String,
  hash: String,
  projectAbv: String
});
