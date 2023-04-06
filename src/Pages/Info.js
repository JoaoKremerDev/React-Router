import React from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";


const Info = () => {

  const { id } = useParams();
  const url = "http://localhost:3000/produtos";
  const { data: products, loading, error } = useFetch(url);

  return (
    <div>
      {products && (
        <div>
          <h1>Descrição de {products[id - 1].produto}:</h1>
          <p>{products[id - 1].descricao}</p>
        </div>
      )}
    </div>
  );
};

export default Info;
