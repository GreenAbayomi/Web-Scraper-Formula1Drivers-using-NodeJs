import mongoose from 'mongoose'


export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://MillenialBoy:Adedeji2811@cluster0.fcw1yfo.mongodb.net/?retryWrites=true&w=majority')
    console.log(`Database connected successfully`)
}


