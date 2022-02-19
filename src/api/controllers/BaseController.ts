import {Response} from "express";

export default class BaseController 
{
    protected Ok(res: Response, data?: any): Response
    {
        return res.status(200).json(data);
    }

    protected NotFound(res: Response, message?: string): Response
    {
        return res.status(404).json({message: message || "Resource not found."});
    }

    protected Error(res: Response, message?: string): Response
    {
        return res.status(500).json({message: message || "Server error."});
    }
}