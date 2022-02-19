import { NextFunction, Request, Response } from "express";
import { Schema } from "joi";

const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const result = schema.validate(req.body);
        if(result.error){
            return res.status(400).json({
                message: result.error.details.map(x => x.message).join(', ')
            });
        }

        return next();
    };
};

export default validateBody;