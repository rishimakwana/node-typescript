import Blog from '../models/BlogSchema';

export const blogService = {
    createBlog: async (title: string, content: string) => {
        const blog = new Blog({ title, content });
        return await blog.save();
    },

    getBlogs: async () => {
        return await Blog.find();
    },

    updateBlog: async (blogId: string, title: string, content: string) => {
        const payload = { $set: { title, content } };
        return await Blog.findByIdAndUpdate(blogId, payload, { new: true });
    },

    deleteBlog: async (blogId: string) => {
        return await Blog.findByIdAndDelete(blogId);
    },
    findBlogById: async (blogId: any) => {
        const findBlog = await Blog.findById(blogId);
        return findBlog ? findBlog : null;
    }
};
