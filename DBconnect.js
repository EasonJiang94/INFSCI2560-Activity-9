let mongoose = require('mongoose');

/*let mongoDB =  ("mongodb+srv://"+
                 process.env.USERNAME+
                 ":"
                 +process.env.PASSWORD+
                 "@"
                 +process.env.HOST+
                 "/"
                 +process.env.DATABASE);*/
let mongoDB='mongodb+srv://Sam:n6vorfzCrOor3v3c@cluster0.wdpbhei.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoDB, {
            
          });
      
          console.log('MongoDB connected: ${conn.connection.host}');
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}



module.exports = { connectDB };
