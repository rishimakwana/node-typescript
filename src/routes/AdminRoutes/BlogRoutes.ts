import express from 'express';
const router = express.Router();
import { BlogController } from '../../controller/BlogController';
import { verifyToken } from '../../middleware/authentication';

router.post('/createBlog', verifyToken, BlogController.createBlog);
router.get('/getBlogs',verifyToken, BlogController.getAllBlogs);
router.put('/updateBlog/:blogId', verifyToken, BlogController.updateBlog);
router.delete('/deleteBlog/:blogId', verifyToken, BlogController.deleteBlog);

export default router;