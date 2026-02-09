import { Request, Response  } from "express";    

interface Icidade{
    nome: string;
};

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export const create =  (req: Request<{},{}, Icidade>, res : Response) => {



    return res.send('Create!');
};
 



