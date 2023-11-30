import useFetch from "../../hooks/useFetch"
import { BASE_URL_CATEGORIES } from "../config/list"



const Layout = () => {
    //peticiòn para mostrar la categoria 
    const { data: categories, loading, error } = useFetch(BASE_URL_CATEGORIES);

    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>Error al cargar categorías: {error.message}</p>;
console.log(categories, 'categorias')
    
return (
    <div>
      <p>soy layout</p>
      {categories && (
        <ul>
          {categories.map((category, index) => (
            <li key={index}>{category}</li> // Usar el índice como clave es aceptable si la lista no cambia
          ))}
        </ul>
      )}
    </div>
  );
}


export default Layout