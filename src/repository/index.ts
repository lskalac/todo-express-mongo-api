import mongoose from 'mongoose';

const connect = (uri: string) => {
    mongoose
        .connect(uri, {
        
        })
        .then(() => {
            return console.info('connected to db');
        })
        .catch((error) => {
            console.error('error on db connection: ', error);
            return process.exit(1);
        });

    mongoose.connection.on('db disconnected', connect);

};

export default connect;