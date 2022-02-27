import mongoose from "mongoose";

const cardSchema = mongoose.Schema({
    name: String, 
    imgUrl: String,
})

// Collection Name, collection schema!
export default mongoose.model("cards", cardSchema)