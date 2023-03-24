import mongoose from 'mongoose'

const doctorsSchema = new mongoose.Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    },
    mobileno: {
        type: String
    },
    emailid: {
        type: String
    },
    specialization: {
        type: String
    },
    consultationfee:{
        type: String
    },
    address: {
        type: String
    }
},
    {
        timestamps: true
    });

const DoctorsModel = mongoose.model('Doctors', doctorsSchema)

export default DoctorsModel