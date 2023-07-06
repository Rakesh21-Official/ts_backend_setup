import express from 'express';
import sample from './sample';

export default function ():express.Router {
    const router = express.Router();

    router.use('/sample',sample())

    return router;
}