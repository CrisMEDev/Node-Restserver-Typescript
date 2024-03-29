import { Request, Response } from 'express';

import Usuario from '../models/usuario';

// Obtener usuarios
export const getUsuarios = async( req: Request, res: Response ) => {

    
    try {

        const usuarios = await Usuario.findAll();
    
        res.json({
            usuarios
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

// Obtener un usuario
export const getUsuario = async( req: Request, res: Response ) => {

    
    try {

        const { id } = req.params;
    
        const usuario = await Usuario.findByPk( id );
    
        if ( !usuario ){ res.status(400).json({ msg: `No existe un usuario con el id ${id}` }) }
    
        res.json({
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

// Crear usuario
export const postUsuario = async( req: Request, res: Response ) => {

    const { body } = req;
    
    try {

        const existeEmail = await Usuario.findOne({
            where: {
                email: body.email
            }
        });

        if ( existeEmail ){
            return res.status(400).json({
                msg: `Ya existe un usuario con el email ${body.email}`
            });
        }
        
        const usuario = Usuario.build( body );
        await usuario.save();
    
        res.json({
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

// Actualizar usuario
export const putUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;
    const { body } = req;

    try {

        const usuario = await Usuario.findByPk( id );

        if ( !usuario ){
            return res.status(404).json({
                msg: `No existe un usuario con el id: ${id}`
            });
        }

        await usuario.update( body );
    
        res.json({
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }

}

// Borrar usuario
export const deleteUsuario = async( req: Request, res: Response ) => {

    const { id } = req.params;

    try {

        const usuario = await Usuario.findByPk( id );

        if ( !usuario ){
            return res.status(404).json({
                msg: `No existe un usuario con el id: ${id}`
            });
        }

        // Eliminación fisica de la DB
        // await usuario.destroy();

        // Eliminación lógica
        await usuario.update({ estado: false });

        res.json({
            usuario
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Hable con el administrador'
        });
    }


}



