import useFetch from "../../hooks/useFetch"
import { BASE_URL_CATEGORIES } from "../config/list"
import './card.css'
import { IMAGE_CATEGORIES } from "../config/list"


const Card = () => {
    //peticiòn para mostrar la categoria 
    const { data: categories, loading, error } = useFetch(BASE_URL_CATEGORIES);

    if (loading) return <p>Cargando categorías...</p>;
    if (error) return <p>Error al cargar categorías: {error.message}</p>;
console.log(categories, 'categorias')
    
return (
    <div className="container">
    {categories && categories.map((category, index) => (
        <div className="card"  key={index}> 
            <div >
            <img src={IMAGE_CATEGORIES}/>
            <p className="category-title">{category}</p> </div>
                

            </div>
       
    ))}
</div>
);
}


export default Card