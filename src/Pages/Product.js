import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";
import { Link } from "react-router-dom";
import '../Pages/Product.css'

export const Product = () => {
  const { id } = useParams();
  const url = "http://localhost:3000/produtos";
  const { data: products, loading, error } = useFetch(url);
  const product = products ? products[id - 1] : null;

  return (
    <>
      <p>ID do produto: {id}</p>
      {error && <p>Ocorreu um erro...</p>}
      {loading && <p>Carregando dados...</p>}
      {product && (
        <div className="product-container">
          <h1>{product.produto}</h1>
          <p>R$ {product.preco}</p>
          <p>id: {product.id}</p>
          {/* Nested Routes */}
          <Link to={`/products/${product.id}/info`}>Mais informações</Link>
        </div>
      )}
    </>
  );
};
