import * as express from 'express';
import listOfPCs from "./utilities";
import handleQuery from "./query";

/**
 * Used to route "/" and "/:pc".
 * "/" Sends the index page which requires the list of PCs.
 * "/:pc" sends a json response of the pc status and users online.
 * @type {Router} express router object.
 */
const indexRouter = express.Router();

/**
 * Handles showing the index page with a list of pcs.
 * Works as middleware for an express router.
 * @param req {express.Request}
 * @param res {express.Response}
 * @param next {Function}
 */
const handleIndex:
    (req: express.Request, res: express.Response, next: Function) => void =
    (req: express.Request, res: express.Response, next: Function) => {
        res.render('index', {pcList: listOfPCs});
    };


/* GET home page. */
indexRouter.get('/', handleIndex);

indexRouter.get('/:pc', handleQuery);


export default indexRouter;