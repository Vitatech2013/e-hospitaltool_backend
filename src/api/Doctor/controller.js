 import patientsModel from '../Common/patientsModel';
 import bloodStockModel from '../Common/bloodStockModel';
import doctorsModel from '../Common/doctorsModel';
import OperationsModel from '../Common/operationsModel';
import {sendEmail} from '../Common/email';


export const doctorLogin = (req, res) => {
	doctorsModel.findOne( {"username":req.query.username, "password":req.query.password}, (err, result)=> {
    res.send(result);
	})
}

export const forgotPassword = (req, res) => {
  console.log(req.query.emailid);
  doctorsModel.findOne({"emailid":req.query.emailid}, (err, result) => {
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
  doctorsModel.findByIdAndUpdate(req.params.id, req.body, { new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}

export const addDoctors = (req, res) => {
  doctorsModel.create(req.body, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      const subject = 'Registration Details';
      const body = `Your are successfully registered in Hospital Management System... <br>Please Login Using below Credentials<br>UserName: ${req.body.username}<br>Password: ${req.body.password}<br>Thank You.`;      
      sendEmail(req.body.emailid, subject, body);
      res.send(result);
    }
  })
}


export const viewProfile = (req, res) => {
  doctorsModel.find( {"username":req.query.username}, (err, result)=> {
    res.send(result.map(record => {
      return record;
    }));
  })
}

export const updateProfile = (req, res) => {
  doctorsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
    }
  })
}



export const viewPatientDetails = (req, res) => {
  patientsModel.find((err, users) => {
    if (!err) {
      res.send(users);
    } else {
      res.send(err);
    }
  })
}

export const GetData= (req, res) => {
  patientsModel.findById(req.params.id, (err, result)=> {
    if (!err) {
      res.send(result);
    } else {
      res.send(err);
    }
  })
}

export const updatemedicine = (req, res) => {
  patientsModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedObj) => {
    if (err) {
      res.send(err);
    } else {
      res.send(updatedObj);
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
