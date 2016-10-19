import mongoose, {Schema} from "mongoose";

export default mongoose.model('User', new mongoose.Schema({
    login: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: Number, required: true},
    profile: {type: Schema.Types.ObjectId, ref: 'Profile'}
}));