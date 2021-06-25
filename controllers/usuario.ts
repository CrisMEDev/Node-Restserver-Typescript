import { Request, Response } from 'express';

// Obtener usuarios
export const getUsuarios = ( req: Request, res: Response ) => {

    res.json({
        msg: 'get - usuarios'
    });

}

// Obtener un usuario
export const getUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'get - usuario',
        id
    });

}

// Crear usuario
export const postUsuario = ( req: Request, res: Response ) => {

    const { body } = req;

    res.json({
        msg: 'post - usuario',
        body
    });

}

// Actualizar usuario
export const putUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'put - usuarios'
    });

}

// Borrar usuario
export const deleteUsuario = ( req: Request, res: Response ) => {

    const { id } = req.params;

    res.json({
        msg: 'delte - usuarios'
    });

}



