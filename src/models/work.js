import mongoose , {Schema} from "mongoose";

const workSchema = new Schema({

    workTitle : String,
    workDescription : String,
    completed : Boolean,

})

export const Work = mongoose.models.works || mongoose.model("works", workSchema );