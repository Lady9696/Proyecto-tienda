
import './card.css'
import { IMAGE_CATEGORIES } from "../config/list"


const Card = ({ category }) => {
    //peticiòn para mostrar la categoria 
   
    
return (
    <div className="container">
    <div className="card">
        <img src={IMAGE_CATEGORIES} alt={category.name}/> {/* Asumiendo que category tiene estas propiedades */}
        <p>{category}</p>
    </div>
</div>
       
    

);
}


export default Card