import mongoose from "mongoose"
const { Schema, model, models } = mongoose

const userSchema = new Schema({
    name: { type: String, require: true},
    email: { type: String, require: true},
    password: { type: String, require: true},
    createdAt: { type: Date, require: true}
})

export const UserModel = models.User || model('User', userSchema);