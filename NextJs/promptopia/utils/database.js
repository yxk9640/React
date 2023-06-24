import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async() => {
    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("=> using existing database connection");
        return;
    }

    // not connected 
    try{
        await mongoose.connect(process.env.MONGOBD_URI,{
            dbName: 'share_prompt',
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        isConnected = true;
        console.log("=> using new database connection");
    }
    catch(error){
        console.log("=> error connecting to database: ", error);
    }
}
