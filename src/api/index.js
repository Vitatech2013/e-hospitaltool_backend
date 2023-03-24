import { Router } from 'express'

import Doctor from './Doctor'
import Admin from './Admin'
import Patient from './Patient'

const router = new Router()

router.use('/admin', Admin)
router.use('/doctor', Doctor)
router.use('/patient',Patient)

export default router