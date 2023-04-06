import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/UseFetch";

const Search = () => {
  const [searchParams] = useSearchParams();
  const url = "http://localhost:3000/produtos?" + searchParams;

  const { data: items, loading, error } = useFetch(url);

  return (
    <div>
      <h1>Resultados Encontrados:</h1>
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

export default Search;
