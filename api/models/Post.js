const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
    },
    photo:{
        type:String,
        required:true,
    },
    username:{
        type:Array,
        required:false,
    }
    },
{ timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
