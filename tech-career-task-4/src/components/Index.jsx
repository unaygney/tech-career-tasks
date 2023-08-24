import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from 'react-router-dom';


function Index() {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState("ascending");
    const [view, setView] = useState(10);
  
    useEffect(() => {
      const getData = () => {
        axios
          .get("https://northwind.vercel.app/api/customers")
          .then((response) => {
            setProducts(response.data.slice(0, view));
          })
          .catch((error) => {
            console.error("error: ", error);
          })
  
          .finally(() => {
            setIsLoading(false);
          });
      };
  
      getData();
    }, [view]);
  
    const handleSort = () => {
      const sortedProducts = [...products];
      if (sortDirection === "ascending") {
        sortedProducts.sort((a, b) => a.companyName.localeCompare(b.companyName));
        setSortDirection("descending");
      } else {
        sortedProducts.sort((a, b) => b.companyName.localeCompare(a.companyName));
        setSortDirection("ascending");
      }
      setProducts(sortedProducts);
    };
  
    const handleNumberChange = (event) => {
      setView(parseInt(event.target.value));
    };
  return (
    
    <div>
        <>
      {(isLoading && <div>Loading</div>) || (
        <>

        <nav>

          <NavLink to="/addcustomer">Add Customer</NavLink>
        </nav>
          <header>
            <h1>Customer Page</h1>

            <label htmlFor="numberData">View : </label>
            <select id="numberData" value={view} onChange={handleNumberChange}>
              {" "}
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="40">40</option>
            </select>
          </header>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th onClick={handleSort}>Company Name</th>
                <th>Street</th>
                <th>City</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <td>{product.id}</td>
                  <td>{product.companyName}</td>
                  <td>{product.address?.street}</td>
                  <td>{product.address?.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
    </div>
  )
}

export default Index
