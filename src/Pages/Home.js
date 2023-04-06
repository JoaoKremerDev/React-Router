import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";
import './Home.css'

const Home = () => {
  const url = "http://localhost:3000/produtos";
  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item, index) => (
            <li key= {index}>
              <h2>{item.produto}</h2>
              <p>R$:{item.preco}</p>
              {/*Rota dinâmica*/}
              <Link to={`/products/${item.id}`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
