import express, {Request, Response, NextFunction} from 'express';
import { URLController } from './controller/URLController';
import { MongoConnection } from './database/MongoConnection';

const api = express();

api.use(express.json())

const urlController = new URLController();

const database = new MongoConnection()
database.connect()

api.post('/shorten', urlController.shorten);

api.get('/:hash', urlController.redirect);

api.get('/test', (req: Request, res: Response) => {
  res.json({ success: true} );
} )

api.listen(5000, ()=> console.log('Express listening'));
