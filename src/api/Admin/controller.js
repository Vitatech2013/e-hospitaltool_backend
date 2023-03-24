import patientsModel from '../Common/patientsModel';
import bloodStockModel from '../Common/bloodStockModel';
import doctorsModel from '../Common/doctorsModel';
import adminLoginModel from './adminLoginModel';
import OperationsModel from '../Common/operationsModel';
import {sendEmail} from '../Common/email';

export const adminLogin = (req, res) =>{
  adminLoginModel.findOne( {"username":req.query.username, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}


export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  adminLoginModel.findOne({"emailid":req.query.emailid}, (err, result) => {
    if (err) {    
      res.send(err);
    }
     else {
		result.map(results => {
		  const subject = 'Credentials Recived';
		  const body = `UserName: ${results.username}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
		  sendEmail(req.query.emailid, subject, body);
		})
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  adminLoginModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const viewDoctors = (req, res) => {
  doctorsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}


export const viewPatients = (req, res) => {
  patientsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const addBloodStock = (req, res) => {
  bloodStockModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const  addOperationDetils = (req, res) => {
  OperationsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewBloodBank = (req, res) => {
  bloodStockModel.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewOperationFee = (req, res) => {
  OperationsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const UpdateDoctors = (req, res) => {
  console.log( req.body);
  doctorsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}
export const RemoveDoctors = (req, res) => {
  doctorsModel.findByIdAndRemove(req.params.id, (err, deletedObj) => {
      if (err) {
          res.send(err);
      }
      else {
       res.send(deletedObj);
      }
  })
}