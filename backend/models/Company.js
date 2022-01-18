const mongoose = require("mongoose");

const CompanySchema = mongoose.Schema({

        name: {
            type: String,
            required: true,
        },

        location : {
            type : String,
            required : true,
        },
        brand: {
            type: String,
            required: true,
        },
        stockavailability: {
            type: String,
            required: true,
        },
});

const Company = mongoose.model("Company",CompanySchema);

module.exports = Company;