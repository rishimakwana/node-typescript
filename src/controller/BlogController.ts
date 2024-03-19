import { blogService } from '../services/BlogService';
import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';

export const BlogController = {
    getAllBlogs: async (req: any, res: any) => {
        try {
            const blogs = await blogService.getBlogs();
            res.status(200).json({ data: blogs });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    createBlog: async (req: any, res: any) => {
        try {
            const { title, content } = req.body;
            const blog = await blogService.createBlog(title, content);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.BLOG_CREATED, blog);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updateBlog: async (req: any, res: any) => {
        try {
            const { blogId } = req.params;
            const { title, content } = req.body;
            if (!blogId) {
                throw { status: 400, message: MESSAGE.INVALID_BLOGId };
            }
            const updatedBlog = await blogService.updateBlog(blogId, title, content);
            if (!updatedBlog) {
                throw { status: 404, message: MESSAGE.BLOG_NOT_FOUND };
            }
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.BLOG_UPDATED, updatedBlog);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deleteBlog: async (req: any, res: any) => {
        try {
            const { blogId } = req.params;
            const blog = await blogService.deleteBlog(blogId);
            if (!blog) {
                return res.status(404).json({ error: MESSAGE.BLOG_NOT_FOUND });
            }
            res.status(200).json({ message: MESSAGE.BLOG_DELETED });
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};
