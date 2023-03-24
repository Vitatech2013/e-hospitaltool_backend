import { Router } from 'express'

import {
  patientRegistration,
  patientLogin,
  forgotPassword,
  chnagepassword,
  updateProfile,
  viewProfile,
  viewMedicine,
  viewBloodDetails,
  viewOperationDetils,
  viewdoctor,
  doctorname
} from './controller'

const router = new Router()

router.post('/registration', patientRegistration)

router.get('/patientLogin', patientLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)


router.put('/updateprofile/:id', updateProfile)

router.get('/viewprofile', viewProfile)

router.get('/viewmedicine', viewMedicine)

router.get('/viewblood', viewBloodDetails)

router.get('/viewfee', viewOperationDetils)

router.get('/view', viewdoctor)

router.get('/viewname', doctorname)

export default router














