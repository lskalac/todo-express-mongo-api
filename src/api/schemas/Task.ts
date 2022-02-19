import Joi from "joi";
import j2s from "joi-to-swagger";

export interface ITaskFilter {
    completed?: boolean
}

export interface ITaskCreate {
    title: string;
}

const taskSchemas = {
    taskFilter: Joi.object().keys({
        completed: Joi.boolean().optional()
    }),
    taskCreate: Joi.object().keys({
        title: Joi.string().max(50).required()
    })
};

const swTaskCreateSchema = j2s(taskSchemas.taskCreate).swagger;

export {
    swTaskCreateSchema
};

export default taskSchemas;