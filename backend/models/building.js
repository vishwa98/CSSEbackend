const mongoose = require("mongoose");

const buildingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50,
    },
 
    description: {
        type: String,
        trim: true,
        maxlength: 50,
    },

  },
  { timestamps: true }
);

module.exports = mongoose.model("Building", buildingSchema);
