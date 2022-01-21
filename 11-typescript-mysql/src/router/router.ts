import { Router, Request, Response } from 'express';
import MYSQL from '../mysql/mysql';

const router = Router();

router.get('/heroes', (req: Request, res: Response) => {

    const query = `
    SELECT * FROM heroes
    `;

    MYSQL.ejecutarQuery(query, (err: any, heroes: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            })
        } else {
            res.json({
                ok: true,
                heroes,
            })
        }
    })
})

router.get('/heroes/:id', (req: Request, res: Response) => {

    const id = req.params.id;

    //escapar id
    const escapeId = MYSQL.instance.cnn.escape(id);


    const query = `
    SELECT * FROM heroes where id = ${escapeId}`;

    MYSQL.ejecutarQuery(query, (err: any, heroe: Object[]) => {
        if (err) {
            res.status(400).json({
                ok: false,
                error: err,
            })
        } else {
            res.json({
                ok: true,
                heroe: heroe[0],
            })
        }
    })
})

export default router;