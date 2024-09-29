import { connect } from 'mongoose';

const dbUrl = 'mongodb://localhost:27017/magic-movies';

export default async function mongooseInit() {
    try {
        await connect(dbUrl);
        console.log('Successfully connected to db');
    } catch (err) {
        console.log('Cannot connect to db' + err.message);
        
    }
}
