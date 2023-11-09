const { Schema, model } = require("mongoose");

const websiteSchema = Schema({
  websiteUrl: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Website = model("website", websiteSchema);
module.exports = Website;
