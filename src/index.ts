import app from "./app";
import { DB_URI, HOST, PORT } from "./config";
import connect from "./repository";

app.listen(Number(PORT), HOST!, () => {
    console.log(`Server started on host: ${HOST} and on port: ${PORT} at ${new Date()}`);
    
    connect(DB_URI);
});