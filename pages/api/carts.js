import { removeCartItem } from '@/api';

// http://localhost:3000/carts
export default async function handler(req, res) {
  const id = req.body.id;
  const { data } = await removeCartItem(id);
  console.log('# id : ', id);
  res.status(200).send(`${data.name} 삭제가 되었습니다.`);
}
