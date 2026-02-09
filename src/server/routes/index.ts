import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';


import { CidadesController } from './../controllers';

const router = Router();



router.get('/', (req: Request, res: Response) => {
  return res.send('Olá, DEV!');
})



router.post('/cidades', CidadesController.create);

export { router };