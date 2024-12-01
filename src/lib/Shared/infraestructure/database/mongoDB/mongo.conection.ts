import mongoose from "mongoose"

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.error(error)
    }
}

export default connectToDatabase