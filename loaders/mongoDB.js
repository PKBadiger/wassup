import mongoose from 'mongoose';
import config from 'config';

export default async () => {
    try {
        await mongoose.connect(config.get('DB_URL_LOCAL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        await console.log('Database Connected Successfully!!!');
    } catch (error) {
        console.log("Database Connection Failed");
    }
}