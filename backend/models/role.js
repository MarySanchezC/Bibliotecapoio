import mongoose from "mongoose";

const roleScheme = new mongoose.Schema({
name:String,
description:String,
dbStatus: Boolean,
registerDate :{type:Date,bibliopoiodb:Date.now},

});

const role = mongoose.model("role",roleScheme)

export default role;