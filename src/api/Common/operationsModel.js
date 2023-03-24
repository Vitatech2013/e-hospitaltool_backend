import mongoose from 'mongoose'

const operationsSchema = new mongoose.Schema({
    doctorname: {
        type: String
    },
    operationname: {
        type: String
    },
    cost: {
        type: String
    },
},
    {
        timestamps: true
    });

const OperationsModel = mongoose.model('operations', operationsSchema)

export default OperationsModel