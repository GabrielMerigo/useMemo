import { useState, useMemo } from 'react';
import Product from './Product'
import Title from './Title';

function App() {
  const [products, setProducts] = useState([
    { name: "Tomate" },
    { name: "Laranja" },
    { name: "Hamburguer" }
  ])
  let variable = 'TExTO';

  const memoizedExampleTitle = useMemo(() => <Title title={variable} />, [variable])
  const [newProduct, setNewProduct] = useState('');

  function handleSubmit(event: any) {
    event.preventDefault()

    setProducts([...products, { name: newProduct }])
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newProduct}
          onChange={e => setNewProduct(e.target.value)}
        />
      </form>
      <ul>
        {products.map((product, index) => (
          <Product name={product.name} key={index} />
        ))}
      </ul>
      {memoizedExampleTitle}
    </div>
  );
}

export default App;
