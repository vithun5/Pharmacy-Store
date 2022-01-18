require('dotenv').config();

const companyData = require('./data/ProductCompany');
const connectDB =require('./database/db');

const Company = require('./models/Company');

connectDB();

const importData = async() => {
    try{
        await Company.deleteMany({});
        await Company.insertMany(companyData);
        console.log("Data Import Success");
        process.exit();
    }catch(error){
        console.log("Error");
        process.exit(1);
    }
};
importData();