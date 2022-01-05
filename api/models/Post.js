const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
    {
        title:
            {
                type: String,
                require: true,
                unique: true,
            },
        username:
            {
                type: String,
                required: true,
            },
        photo:
            {
                type: String,
                required: false,
            },
        desc:
            {
                type: String,
                required: true,
            },
        categories:
            {
                type: Array,
                require:false,
                // ["Life","Music","Tech","Sports" ,"Climate"],
            },
    },
    { timestamps: true }
);
module.exports = mongoose.model("Post", PostSchema);
