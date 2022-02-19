import { model, Schema } from "mongoose";
import { ITask } from "../../types/Task";

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
        maxlength: 50
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    }
});

export default model<ITask>("Task", taskSchema, "Task");