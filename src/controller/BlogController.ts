import MESSAGE from '../helper/message';
import { sendErrorResponse, sendSuccessResponse } from '../utils/responder';
import { createEntity, deleteEntityById, getAllEntity, getEntityById, updateEntity } from '../helper/commonServices';
import Blog from '../models/BlogSchema';

export const BlogController = {
    getAllBlogs: async (req: any, res: any) => {
        try {
            const blogs = await getAllEntity(Blog);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, blogs);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    getBlogById: async (req: any, res: any) => {
        try {
            const { blogId } = req.params;
            const blogs = await getEntityById(Blog, blogId, MESSAGE.BLOG_NOT_FOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.FETCH_DATA_SUCCESSFULLY, blogs);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },
    createBlog: async (req: any, res: any) => {
        try {
            const data = req.body;
            const entity = await createEntity(Blog, data);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.BLOG_CREATED, entity);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    updateBlog: async (req: any, res: any) => {
        try {
            const { blogId } = req.params;
            const data = req.body;
            if (!blogId) {
                throw { status: 400, message: MESSAGE.INVALID_BLOGId };
            }
            const updatedBlog = await updateEntity(Blog, blogId, data, MESSAGE.BLOG_NOT_FOUND)
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.BLOG_UPDATED, updatedBlog);

        } catch (error) {
            sendErrorResponse(error, res);
        }
    },

    deleteBlog: async (req: any, res: any) => {
        try {
            const { blogId } = req.params;
            await deleteEntityById(Blog, blogId, MESSAGE.BLOG_NOT_FOUND);
            sendSuccessResponse(res, MESSAGE.OK, MESSAGE.BLOG_DELETED);
        } catch (error) {
            sendErrorResponse(error, res);
        }
    }
};
