import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://northwind.vercel.app/api/products")
      .then((res) => res.data)
      .then((data) => {
        setProducts(data)
      })      
      .catch(error => {
        console.error('error: '  ,  error)
      })

      .finally(() =>{
        setIsLoading(false)
      })
  }, []);



  return (
    <>
{isLoading && <div>Loading</div> || <ul>
        {products.map((product, idx) => (
          <li key={idx}>{product.name}</li>
        ))}
      </ul>}
    </>
  );
}

export default App;
