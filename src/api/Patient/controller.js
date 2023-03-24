import patientsModel from '../Common/patientsModel';
import bloodStockModel from '../Common/bloodStockModel';
import OperationsModel from '../Common/operationsModel';
import doctorsModel from '../Common/doctorsModel';
import {sendEmail} from '../Common/email';

export const patientLogin = (req, res) =>{
    patientsModel.findOne( {"patientname":req.query.patientname, "password":req.query.password}, (err,result)=> {
    res.send(result);
  })
}

export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  patientsModel.findOne({"emailid":req.query.emailid}, (err, result) => {
    if (err) {
      res.send(err);
    }
     else {
		result.map(results => {
		  const subject = 'Credentials Recived';
		  const body = `UserName: ${results.patientname}<br>Password: ${results.password}<br>Please Login Using these Credentials<br>Thank You.`;
		  sendEmail(req.query.emailid, subject, body);
    })
      res.send(result);
    }
  })
}

export const chnagepassword = (req, res) => {
  patientsModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const patientRegistration = (req, res) => {
  console.log(req.body);
  patientsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewProfile = (req, res) => {
    patientsModel.find( {"patientname":req.query.patientname }, (err, result)=> {
      res.send(result.map(record => {
        return record;
      }));
    })
  }
  
  export const updateProfile = (req, res) => {
    patientsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
      if (err) {
        res.send(err);
      } else {
        res.send(updatedObj);
      }
    })
  }



export const viewMedicine = (req, res) => {
    patientsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}



export const viewBloodDetails = (req, res) => {
  bloodStockModel.find((err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}

export const viewOperationDetils = (req, res) => {
  OperationsModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  })
}


export const viewdoctor= (req, res) => {
  doctorsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}
export const doctorname = (req, res) => {
  doctorsModel.find( {"username":req.query.username }, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}