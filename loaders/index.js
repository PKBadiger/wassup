import connectDB from './mongoDB';
import expressLoader from './express';

export default async(app) => {

    // Connect Database
    connectDB()
    
    // loads express settings
    await expressLoader(app);
}