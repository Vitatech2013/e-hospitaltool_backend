import { Router } from 'express'

import {
  doctorLogin,
  forgotPassword,
  chnagepassword,
  addDoctors,
  viewProfile,
  updateProfile,
  viewPatientDetails,
  GetData,
  updatemedicine,
  viewBloodDetails,
  viewOperationDetils

} from './controller'

const router = new Router()

router.get('/doctorlogin', doctorLogin)

router.get('/getpassword', forgotPassword)

router.put('/updatepassword/:id',chnagepassword)


router.post('/adddoctors', addDoctors)

router.get('/viewprofile', viewProfile)


router.get('/viewblooddetails', viewBloodDetails)

router.get('/viewfeedetails', viewOperationDetils)

router.put('/updateprofile/:id', updateProfile)

router.get('/viewpatients', viewPatientDetails)

router.get('/:id', GetData)

router.put('/medicineupdate/:id', updatemedicine)









export default router
