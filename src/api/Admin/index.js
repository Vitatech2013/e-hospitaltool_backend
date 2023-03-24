import { Router } from 'express'

import {
  adminLogin,
  forgotPassword,
  chnagepassword,
  viewDoctors,
  viewPatients,
  addOperationDetils,
  addBloodStock,
  viewBloodBank,
  viewOperationFee,
  RemoveDoctors,
  UpdateDoctors
} from './controller'

const router = new Router()

router.get('/adminlogin', adminLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)


router.get('/viewdoctors', viewDoctors)


router.put('/doctorupdate/:id', UpdateDoctors)

router.get('/viewpatients', viewPatients)

router.post('/operation', addOperationDetils)

router.post('/addblood', addBloodStock)


router.delete('/doctorremove/:id', RemoveDoctors)


router.get('/viewbloodbank', viewBloodBank)

router.get('/viewoperationfee', viewOperationFee)



export default router
