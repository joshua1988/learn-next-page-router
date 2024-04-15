import { removeCartItem } from '@/api';

export default async function handler(req, res) {
	try {
		const { data } = await removeCartItem(req.body.data.id);
		res.status(200).send(data);
	} catch (error) {
		console.log({ error });
		res.status(error.response.status).send(error);
	}
}
