import React from 'react';
import { memo } from 'react';

type ProductProps = {
  name: string;
}

function Product({ name }: ProductProps) {
  console.log('RENDERIZOU');

  return (
    <li>
      <strong>{name}</strong>
    </li>
  )
}

export default memo(Product);