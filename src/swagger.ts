import { swTaskRouter } from "./api/routes/TaskRouter";
import { API_URL } from "./config"

const swagger = {
    openapi: '3.0.0',
    info: {
      title: 'Todo API',
      version: '1.0.0',
      description: 'Todo REST API endpoints'
    },
    servers: [
      {
        url: API_URL,
        description: 'Development server'
      }
    ],
    paths: {
        ...swTaskRouter
    }
};

export default swagger