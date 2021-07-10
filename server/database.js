require("dotenv").config()
const mongoose  = require("mongoose")

const getConnection  =  async () => {
    try{
    await mongoose.connect(process.env.MONOGO_URI , 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        }).then(() => { console.log("Connected to MOngoDB") })
    
    }
    catch(err){
        console.log("Error in connectiong to the DB",err.message)
    }
}  

module.exports = getConnection