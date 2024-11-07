import type { Category } from '@/library/types/category';
import { Schema, model } from 'mongoose';

export const CategoryModel = model(
	'Category',
	new Schema<Category>(
		{
			name: { type: String, required: true },
			food: [{ type: Schema.Types.ObjectId, ref: 'Food' }]
		},
		{
			timestamps: true
		}
	)
);

// .pre('deleteMany', async function (next) {
// 	const category = this.getQuery()['_id'];

// 	await TicketModel.updateMany({ category }, { category: null });
// 	next();
// })
