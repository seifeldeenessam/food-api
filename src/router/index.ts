import { Router } from 'express';
import authRouter from './auth';
import categoriesRouter from './categories';
import usersRouter from './users';

const router = Router();

export default (): Router => {
	authRouter(router);
	usersRouter(router);
	categoriesRouter(router);

	return router;
};
