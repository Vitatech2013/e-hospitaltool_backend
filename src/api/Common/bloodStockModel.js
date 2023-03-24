import mongoose from 'mongoose'

const bloodStockSchema = new mongoose.Schema({
    bloodgroup: {
        type: String
    },
    bloodpackets: {
        type: String
    }
},
    {
        timestamps: true
    });

const BloodStockModel = mongoose.model('bloodStock', bloodStockSchema)

export default BloodStockModel