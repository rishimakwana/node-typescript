import mongoose from 'mongoose';

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    content: {
        type: Array,
        default: [],
    },
}, { timestamps: true });

const Blog = mongoose.model('Blog', blogSchema);

export default Blog;
