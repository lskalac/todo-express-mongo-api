import "reflect-metadata";
import express, {NextFunction, Request, Response} from "express";
import router from "./api/routes";
import { ENV } from "./config";
import swaggerUI from "swagger-ui-express";
import swagger from "./swagger";

const app = express();

/** body parser */
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** setup docs */
if(ENV === 'development') {
    app.use('/docs', swaggerUI.serve, swaggerUI.setup(swagger));
}

/** inject routes */
app.use(router);

/** not found endpoint */
app.get('*', (req: Request, res: Response) => {
    res.status(404).json({message: `${req.url} not found.`});
});

/** global error handling */
router.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message});
});

export default app;