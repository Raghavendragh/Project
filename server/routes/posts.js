import express from 'express';
import { getPosts } from '../controllers/posts1.js'
import { savePosts } from '../controllers/posts1.js'

const router = express.Router();

router.get('/', getPosts);

router.post('/', savePosts);

export default router