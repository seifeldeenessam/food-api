import type { Schema } from 'express-validator';

const createSchema: Schema = {
	name: {
		isString: true,
		notEmpty: { errorMessage: 'Name is required' }
	},
	food: {
		isArray: true
	}
};

const updateSchema: Schema = {
	name: {
		isString: true,
		notEmpty: { errorMessage: 'Name is required' }
	},
	food: {
		isArray: true
	}
};

export { createSchema, updateSchema };
