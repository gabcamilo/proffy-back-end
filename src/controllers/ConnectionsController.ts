import {Request, Response} from 'express';
import db from '../database/connection';

export default class ConnectionsController {

	async create (req: Request, res: Response){
		const { user_id } = req.body;

		try {
			await db('connections').insert({
				user_id,
			});
			return res.status(201).send();

		}catch(err){
			console.log(err)
			return res.status(500).json({
				message: 'Error creating connection.'
			});
		}
	}

}