import {Router } from 'express'
import { SurveyController } from './controllers/SurveyController'
import { UserController } from './controllers/UserController'

const router = Router()

const userController = new UserController()
const surveyController = new SurveyController()

router.get('/users', userController.index)
router.post('/users', userController.create)


router.post('/surveys', surveyController.create)
router.get('/surveys', surveyController.index)

export {router}