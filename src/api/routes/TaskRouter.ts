import Router from "express-promise-router";
import { container } from "tsyringe";
import TaskController from "../controllers/TaskController";
import validateBody from "../middlewares/validateBody";
import taskSchemas, { swTaskCreateSchema } from "../schemas/Task";

const taskController = container.resolve(TaskController);

const taskRouter = Router();

taskRouter.get("/", taskController.FindAsync);
taskRouter.post("/", validateBody(taskSchemas.taskCreate), taskController.PostAsync);
taskRouter.put("/:id", taskController.CompleteAsync);

export default taskRouter;

export const swTaskRouter = {
    "/tasks": {
        "get": {
            "parameters": [{
                "in": "query",
                "required": false,
                "name": "completed",
                "type": "boolean"
            }],
            "summary": "Finds task collection that satisfies given conditions",
            "tags": ["tasks"],
            "responses": {
                "200": {
                    "description": "Task collection"
                }
            }
        },
        "post": {
            "summary": "Creates a new task",
            "tags": ["tasks"],
            "requestBody": {
                "content": {
                    "application/json": {
                        "schema": {
                            ...swTaskCreateSchema
                        }
                    }
                }
            },
            "responses": {
                "200": {
                    "description": "Successfull create"
                },
                "500": {
                    "description": "Server error"
                }
            }
        }
    },
    "/tasks/{id}": {
        "put": {
            "parameters": [{
                "in": "path",
                "required": true,
                "name": "id",
                "type": "uuid"
            }],
            "summary": "Marks the task with given identifier as done",
            "tags": ["tasks"],
            "responses": {
                "200": {
                    "description": "Successfull update"
                },
                "404": {
                    "description": "Resource with given id doesn't exists"
                },
                "500": {
                    "description": "Server error"
                }
            }
        }
    }
};
