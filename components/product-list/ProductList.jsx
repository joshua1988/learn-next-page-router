import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './ProductList.module.css';
import Link from 'next/link';
import { fetchProducts } from '@/api';
// import { fetchProducts } from '@/api/index';

function ProductList() {
  const [products, setProducts] = useState();

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
    });
  }, []);

  console.log(products);

  return (
    <ul>
      {products &&
        products.map(product => {
          return (
            <li key={product.id} className={styles.item}>
              <Link href={`/products/${product.id}`}>
                <div>
                  {/* <img src="" alt="" /> */}
                  <Image
                    src={product.imageUrl}
                    width={300}
                    height={250}
                    alt={product.name}
                  ></Image>
                </div>
                <div>{product.name}</div>
              </Link>
            </li>
          );
        })}
    </ul>
  );
}

export default ProductList;
