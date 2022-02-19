import { injectable } from "tsyringe";
import Task from "../repository/models/Task";
import { ITask } from "../types/Task";
import { Types } from "mongoose";

@injectable()
export default class TaskService 
{
    FindAsync = async (completed?: boolean): Promise<ITask[]> => 
    {
        const whereClause = completed ? { completed: completed! } : {};
        return Task.find(whereClause);
    }

    GetAsync = async (id: string): Promise<ITask | null> => 
    {
        const objId = new Types.ObjectId(id);
        return Task.findById(objId);
    }

    PostAsync = async (task: Pick<ITask, "title">): Promise<ITask | null> =>
    {
        return Task.create(task);
    }

    CompleteAsync = async (id: string): Promise<boolean | null> => 
    {
        const objId = new Types.ObjectId(id);
        return Task.findByIdAndUpdate(objId, {completed: true});
    }
}