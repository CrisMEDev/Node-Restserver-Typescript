import { Request, Response } from 'express';

import Usuario from '../models/usuario';

// Obtener usuarios
export const getUsuarios = async( req: Request, res: Response ) => {

    const usuarios = await Usuario.findAll();

    res.json({
        usuarios
    });

}

// Obtener un usuario
export const getUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;

    const usuario = await Usuario.findByPk( id );

    if ( !usuario ){ res.status(400).json({ msg: `No existe un usuario con el id ${id}` }) }

    res.json({
        usuario
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



