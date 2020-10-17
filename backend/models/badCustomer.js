const mongoose = require("mongoose");

const { v4: uuidv4 } = require('uuid');

const badCustomerSchema = new mongoose.Schema(
  {
    currentHalt: {
      type: String
    },

    badCustomerId: {
      type: String,
    },

    customerDetails: [{
      name: String,
      start: String,
      destination: String,
      price: Number,
    }],

  },
  { timestamps: true }
);

badCustomerSchema.pre("save", function(next) {
    this.badCustomerId = uuidv4();
    next();
});

module.exports = mongoose.model("BadCustomer", badCustomerSchema);
