const mongoose = require('mongoose')
const connectDB = async() => {
    try {
        // kêt nối dữ liệu thông qua chuỗi kết nối của mongodb
        await mongoose.connect(process.env.MONGO_URL)
        console.log('successful connection mongoDB')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}
module.exports = connectDB