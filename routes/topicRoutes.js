import express from 'express'

import {createTopic , getTopic} from '../controllers/topicController.js';

const router = express.Router()

router.route('/').post(createTopic).get(getTopic)

export default router