import mongoose from 'mongoose'

const patientsSchema = new mongoose.Schema({    
    patientname: {
        type: String
    },
    password:{
        type: String
    },
    mobileno: {
        type: String
    },
    emailid:{
        type: String
    },
    problem: {
        type: String
    },
    appointmentdate:{
        type:String
    },
    doctorname:{
        type:String
    },
    medicine:{
        type:String
    },
    address: {
        type: String
    },
},
    {
        timestamps: true
    });

const PatientsModel = mongoose.model('patients', patientsSchema)

export default PatientsModel