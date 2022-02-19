import { injectable } from "tsyringe";
import {Request, Response} from "express";
import BaseController from "./BaseController";
import TaskService from "../../services/TaskService";
import { ITaskCreate, ITaskFilter } from "../schemas/Task";

@injectable()
export default class TaskController extends BaseController
{
    private _service: TaskService;
    
    constructor(service: TaskService)
    {
        super();
        this._service = service;
    }

    FindAsync = async (req: Request, res: Response): Promise<Response> =>
    {
        const filter: ITaskFilter = req.query;
        const result = await this._service.FindAsync(filter.completed);
        return this.Ok(res, result);
    }

    PostAsync = async (req: Request, res: Response): Promise<Response> =>
    {
        const body: ITaskCreate = req.body;
        const result = await this._service.PostAsync(body);
        if(result)
            return this.Ok(res, result);

        return this.Error(res, "Create failed.");
    }

    CompleteAsync = async (req: Request, res: Response): Promise<Response> =>
    {
        const id = req.params.id;
        const entity = await this._service.GetAsync(id);

        if(!entity)
            return this.NotFound(res);

        const result = await this._service.CompleteAsync(id);
        if(result)
            return this.Ok(res);

        return this.Error(res, "Complete failed.");
    }
}