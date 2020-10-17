const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const { v4: uuidv4 } = require('uuid');

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      maxlength: 50,
    },

    type: {
        type: String,
        trim: true,
        maxlength: 50,
    },

    max: {
        type: Number,
        trim: true,
        maxlength: 50,
    },

    building: {
        type: String,
      },

    slug: {
        type: String,
    },

    utimes: [{
        endTime: String,
        name: String,
        startTime: String,
    }],

  },
  { timestamps: true }
);

roomSchema.pre("save", function(next) {
    this.slug = uuidv4();
    next();
});

module.exports = mongoose.model("Room", roomSchema);
