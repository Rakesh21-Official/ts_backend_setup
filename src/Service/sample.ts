import express, { Response, Request } from "express";
import Messagecode from "../Library/message";
import { HTTPResponseCode } from "../Library/responsecode";


export default () => {
    const router = express.Router({});

    router.get('/', (req, res) => {
        try {
            res.status(HTTPResponseCode.SUCCESS).send(Messagecode.successful)
        } catch (error) {
            res.status(HTTPResponseCode.INTERNAL_SERVER_ERROR).send(Messagecode.error);
        }

    });

    return router;
}