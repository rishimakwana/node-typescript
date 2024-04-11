import express from 'express';
const router = express.Router();
import { BlogController } from '../../controller/BlogController';
import { verifyToken } from '../../middleware/authentication';

router.post('/', verifyToken, BlogController.createBlog);
router.get('/',verifyToken, BlogController.getAllBlogs);
router.put('/:blogId', verifyToken, BlogController.updateBlog);
router.get('/:blogId', verifyToken, BlogController.getBlogById);
router.delete('/:blogId', verifyToken, BlogController.deleteBlog);

export default router;