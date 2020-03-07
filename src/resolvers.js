const Post = require("./model/Post");

const resolvers = {
    async post({ id }) {
        return await Post.findById(id);
    },
    async posts() {
        return await Post.find();
    },
    async createPost({ title, image, description, author }) {
        const post = {
            title,
            image,
            description,
            author
        };
        return await Post.create(post);
    },
    async updatePost({ id, title }) {
        return await Post.findOneAndUpdate({ _id: id }, { title: title });
    },
    async deletePost({ id }) {
        return await Post.findByIdAndRemove({ _id: id }, {});
    }
};

module.exports = resolvers;